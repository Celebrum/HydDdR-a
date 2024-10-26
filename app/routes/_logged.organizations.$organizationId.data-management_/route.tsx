import React, { useState } from 'react'
import { Typography, Table, Input, Button, Space, message } from 'antd'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function DataManagementPage() {
  const { user } = useUserContext()
  const [searchTerm, setSearchTerm] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState('')

  const {
    data: cerebrumData,
    isLoading: cerebrumLoading,
    refetch: refetchCerebrum,
  } = Api.cognitiveData.findMany.useQuery({
    where: { dataType: 'cerebrum', value: { contains: searchTerm } },
  })

  const {
    data: functionsData,
    isLoading: functionsLoading,
    refetch: refetchFunctions,
  } = Api.cognitiveData.findMany.useQuery({
    where: { dataType: 'functions', value: { contains: searchTerm } },
  })

  const { mutateAsync: updateData } = Api.cognitiveData.update.useMutation()

  const handleEdit = (record: any) => {
    setEditingId(record.id)
    setEditValue(record.value)
  }

  const handleSave = async (id: string) => {
    try {
      await updateData({ where: { id }, data: { value: editValue } })
      message.success('Data updated successfully')
      setEditingId(null)
      refetchCerebrum()
      refetchFunctions()
    } catch (error) {
      message.error('Failed to update data')
    }
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      render: (text: string, record: any) =>
        editingId === record.id ? (
          <Input
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            onPressEnter={() => handleSave(record.id)}
          />
        ) : (
          text
        ),
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          {editingId === record.id ? (
            <Button onClick={() => handleSave(record.id)}>Save</Button>
          ) : (
            <Button onClick={() => handleEdit(record)}>Edit</Button>
          )}
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}>Data Management</Title>
        <Paragraph>
          View and analyze data from the cerebrum.brain.scrde.ca database and
          access variables in the functions.cerebrum.brain.scrde.ca database.
        </Paragraph>
      </div>

      <Input
        placeholder="Search data"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ marginBottom: '1rem' }}
        prefix={<i className="las la-search"></i>}
      />

      <Title level={3}>Cerebrum Data</Title>
      <Table
        columns={columns}
        dataSource={cerebrumData}
        loading={cerebrumLoading}
        rowKey="id"
      />

      <Title level={3} style={{ marginTop: '2rem' }}>
        Functions Data
      </Title>
      <Table
        columns={columns}
        dataSource={functionsData}
        loading={functionsLoading}
        rowKey="id"
      />
    </PageLayout>
  )
}
