import { Typography, Card, Spin, Row, Col, Descriptions, Button } from 'antd'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function QuantumComputerPrototypePage() {
  const { organization } = useUserContext()
  const { organizationId } = useParams()
  const navigate = useNavigate()

  const { data: prototypes, isLoading } =
    Api.quantumPrototype.findMany.useQuery({
      where: { userId: organization?.id },
      orderBy: { createdAt: 'desc' },
    })

  const latestPrototype = prototypes?.[0]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Quantum Computer Prototype Status</Title>
      <Paragraph>
        View the current status and progress of the home quantum computer
        prototype, and access technical specifications and design documents.
      </Paragraph>

      {isLoading ? (
        <Spin size="large" />
      ) : latestPrototype ? (
        <Card>
          <Descriptions title="Latest Prototype" bordered>
            <Descriptions.Item label="Name">
              {latestPrototype.name}
            </Descriptions.Item>
            <Descriptions.Item label="Description">
              {latestPrototype.description}
            </Descriptions.Item>
            <Descriptions.Item label="Creation Date">
              {dayjs(latestPrototype.creationDate).format('MMMM D, YYYY')}
            </Descriptions.Item>
          </Descriptions>

          <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
            <Col xs={24} sm={12}>
              <Card
                title="Current Status"
                extra={<i className="las la-info-circle" />}
              >
                <Paragraph>
                  The prototype is currently in development phase.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card
                title="Progress"
                extra={<i className="las la-chart-line" />}
              >
                <Paragraph>65% complete</Paragraph>
              </Card>
            </Col>
          </Row>

          <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
            <Col xs={24} sm={12}>
              <Button
                type="primary"
                icon={<i className="las la-file-alt" />}
                onClick={() =>
                  navigate(`/organizations/${organizationId}/prototype/specs`)
                }
              >
                View Technical Specifications
              </Button>
            </Col>
            <Col xs={24} sm={12}>
              <Button
                icon={<i className="las la-drafting-compass" />}
                onClick={() =>
                  navigate(`/organizations/${organizationId}/prototype/design`)
                }
              >
                Access Design Documents
              </Button>
            </Col>
          </Row>
        </Card>
      ) : (
        <Card>
          <Paragraph>No prototype data available.</Paragraph>
        </Card>
      )}
    </PageLayout>
  )
}
