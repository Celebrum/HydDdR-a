import { useState } from 'react'
import {
  Typography,
  Table,
  Form,
  Input,
  Button,
  Space,
  Modal,
  Spin,
} from 'antd'
import { Prisma } from '@prisma/client'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CognitiveAbilitiesMonitorPage() {
  const { user } = useUserContext()
  const [form] = Form.useForm()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const {
    data: cognitiveData,
    isLoading,
    refetch,
  } = Api.cognitiveData.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { timestamp: 'desc' },
  })

  const { mutateAsync: createCognitiveData } =
    Api.cognitiveData.create.useMutation()

  const columns = [
    {
      title: 'Data Type',
      dataIndex: 'dataType',
      key: 'dataType',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp',
    },
  ]

  const handleSubmit = async (values: { dataType: string; value: string }) => {
    if (!user?.id) return
    try {
      await createCognitiveData({
        data: {
          dataType: values.dataType,
          value: values.value,
          timestamp: new Date().toISOString(),
          userId: user.id,
        },
      })
      setIsModalVisible(false)
      form.resetFields()
      refetch()
    } catch (error) {
      console.error('Error creating cognitive data:', error)
    }
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}>
          <i className="las la-brain" style={{ marginRight: '0.5rem' }}></i>
          Cognitive Abilities Monitor
        </Title>
        <Text>
          View and analyze cognitive function data, and input new data for
          simulations.
        </Text>
      </div>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '1rem',
          }}
        >
          <Button type="primary" onClick={() => setIsModalVisible(true)}>
            <i className="las la-plus" style={{ marginRight: '0.5rem' }}></i>
            Add New Data
          </Button>
        </div>

        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <Spin size="large" />
          </div>
        ) : (
          <Table
            dataSource={cognitiveData}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 10 }}
          />
        )}

        <Modal
          title="Add New Cognitive Data"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item
              name="dataType"
              label="Data Type"
              rules={[
                { required: true, message: 'Please input the data type!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="value"
              label="Value"
              rules={[{ required: true, message: 'Please input the value!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Space>
    </PageLayout>
  )
}
