import React, { useState, useEffect } from 'react'
import {
  Typography,
  Card,
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  message,
} from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SystemSecurityPage() {
  const { organization } = useUserContext()
  const { organizationId } = useParams()
  const [securityProtocols, setSecurityProtocols] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const {
    data: protocolsData,
    isLoading,
    refetch,
  } = Api.securityProtocol.findMany.useQuery({
    where: { organizationId },
  })

  const { mutateAsync: createProtocol } =
    Api.securityProtocol.create.useMutation()
  const { mutateAsync: updateProtocol } =
    Api.securityProtocol.update.useMutation()

  useEffect(() => {
    if (protocolsData) {
      setSecurityProtocols(protocolsData)
    }
  }, [protocolsData])

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  const handleSubmit = async values => {
    try {
      await createProtocol({
        data: {
          ...values,
          implementationDate: dayjs().format('YYYY-MM-DD'),
          organizationId,
        },
      })
      message.success('Security protocol added successfully')
      refetch()
      setIsModalVisible(false)
      form.resetFields()
    } catch (error) {
      message.error('Failed to add security protocol')
    }
  }

  const handleUpdate = async (id, level) => {
    try {
      await updateProtocol({
        where: { id },
        data: { level },
      })
      message.success('Security protocol updated successfully')
      refetch()
    } catch (error) {
      message.error('Failed to update security protocol')
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 'level',
      render: (level, record) => (
        <InputNumber
          min={1}
          max={10}
          defaultValue={level}
          onChange={value => handleUpdate(record.id, value)}
        />
      ),
    },
    {
      title: 'Implementation Date',
      dataIndex: 'implementationDate',
      key: 'implementationDate',
      render: date => dayjs(date).format('YYYY-MM-DD'),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Card>
        <Title level={2}>
          <i className="las la-shield-alt"></i> System Security
        </Title>
        <Text>
          Monitor and manage the SeCuReDmE_engin performance and security
          protocols to ensure data protection and system integrity.
        </Text>

        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Button type="primary" onClick={showModal}>
            <i className="las la-plus"></i> Add Security Protocol
          </Button>
        </div>

        <Table
          dataSource={securityProtocols}
          columns={columns}
          loading={isLoading}
          rowKey="id"
        />

        <Modal
          title="Add Security Protocol"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item
              name="name"
              label="Protocol Name"
              rules={[
                { required: true, message: 'Please input the protocol name!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                { required: true, message: 'Please input the description!' },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              name="level"
              label="Security Level"
              rules={[
                { required: true, message: 'Please input the security level!' },
              ]}
            >
              <InputNumber min={1} max={10} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    </PageLayout>
  )
}
