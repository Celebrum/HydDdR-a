import { Typography, Card, List, Button, Modal, Form, Input } from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ConnectomeConfigurationPage() {
  const { organizationId } = useParams()
  const { user } = useUserContext()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingStructure, setEditingStructure] = useState(null)

  const { data: connectomeStructures, refetch } =
    Api.connectomeStructure.findMany.useQuery({
      where: { userId: user?.id },
    })

  const { data: pythonSnippets, refetch: refetchSnippets } =
    Api.pythonSnippet.findMany.useQuery({
      where: { userId: user?.id },
    })

  const { mutateAsync: createStructure } =
    Api.connectomeStructure.create.useMutation()
  const { mutateAsync: updateStructure } =
    Api.connectomeStructure.update.useMutation()
  const { mutateAsync: deleteStructure } =
    Api.connectomeStructure.delete.useMutation()

  const { mutateAsync: createSnippet } = Api.pythonSnippet.create.useMutation()
  const { mutateAsync: updateSnippet } = Api.pythonSnippet.update.useMutation()
  const { mutateAsync: deleteSnippet } = Api.pythonSnippet.delete.useMutation()

  const handleCreateOrUpdateStructure = async values => {
    if (editingStructure) {
      await updateStructure({
        where: { id: editingStructure.id },
        data: { ...values, userId: user?.id },
      })
    } else {
      await createStructure({
        data: {
          ...values,
          userId: user?.id,
          creationDate: new Date().toISOString(),
        },
      })
    }
    setIsModalVisible(false)
    setEditingStructure(null)
    refetch()
  }

  const handleDeleteStructure = async id => {
    await deleteStructure({ where: { id } })
    refetch()
  }

  const handleCreateOrUpdateSnippet = async values => {
    if (values.id) {
      await updateSnippet({
        where: { id: values.id },
        data: { ...values, userId: user?.id },
      })
    } else {
      await createSnippet({
        data: {
          ...values,
          userId: user?.id,
          creationDate: new Date().toISOString(),
        },
      })
    }
    refetchSnippets()
  }

  const handleDeleteSnippet = async id => {
    await deleteSnippet({ where: { id } })
    refetchSnippets()
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Connectome Configuration</Title>
      <Text>
        Manage and optimize the organization of databases and subdomains.
      </Text>

      <Card
        title="Connectome Structures"
        extra={
          <Button onClick={() => setIsModalVisible(true)}>Add Structure</Button>
        }
        style={{ marginTop: 20 }}
      >
        <List
          dataSource={connectomeStructures}
          renderItem={item => (
            <List.Item
              actions={[
                <Button
                  onClick={() => {
                    setEditingStructure(item)
                    setIsModalVisible(true)
                  }}
                >
                  Edit
                </Button>,
                <Button danger onClick={() => handleDeleteStructure(item.id)}>
                  Delete
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={item.name}
                description={`Created on: ${item.creationDate}`}
              />
            </List.Item>
          )}
        />
      </Card>

      <Card title="Python Snippets" style={{ marginTop: 20 }}>
        <List
          dataSource={pythonSnippets}
          renderItem={item => (
            <List.Item
              actions={[
                <Button
                  onClick={() => handleCreateOrUpdateSnippet({ ...item })}
                >
                  Edit
                </Button>,
                <Button danger onClick={() => handleDeleteSnippet(item.id)}>
                  Delete
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={item.title}
                description={`Created on: ${item.creationDate}`}
              />
            </List.Item>
          )}
        />
        <Form onFinish={handleCreateOrUpdateSnippet} style={{ marginTop: 20 }}>
          <Form.Item
            name="title"
            rules={[
              { required: true, message: 'Please input the snippet title!' },
            ]}
          >
            <Input placeholder="Snippet Title" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              { required: true, message: 'Please input the Python code!' },
            ]}
          >
            <Input.TextArea rows={4} placeholder="Python Code" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Snippet
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Modal
        title={editingStructure ? 'Edit Structure' : 'Add Structure'}
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false)
          setEditingStructure(null)
        }}
        footer={null}
      >
        <Form
          onFinish={handleCreateOrUpdateStructure}
          initialValues={editingStructure}
        >
          <Form.Item
            name="name"
            rules={[
              { required: true, message: 'Please input the structure name!' },
            ]}
          >
            <Input placeholder="Structure Name" />
          </Form.Item>
          <Form.Item
            name="structureData"
            rules={[
              { required: true, message: 'Please input the structure data!' },
            ]}
          >
            <Input.TextArea rows={4} placeholder="Structure Data" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingStructure ? 'Update' : 'Create'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
