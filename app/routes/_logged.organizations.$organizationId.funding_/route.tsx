import { Typography, Card, Timeline, Progress, Spin, Row, Col } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function FundingandDevelopmentTimelinePage() {
  const { organizationId } = useParams()

  const { data: fundingStatuses, isLoading: isFundingLoading } =
    Api.fundingStatus.findMany.useQuery({
      where: { organizationId },
      orderBy: { date: 'desc' },
    })

  const { data: securityProtocols, isLoading: isSecurityLoading } =
    Api.securityProtocol.findMany.useQuery({
      where: { organizationId },
      orderBy: { implementationDate: 'desc' },
    })

  if (isFundingLoading || isSecurityLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  const totalFunding =
    fundingStatuses?.reduce(
      (sum, status) => sum + parseFloat(status.amount),
      0,
    ) || 0
  const latestFundingStatus = fundingStatuses?.[0]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Funding and Development Timeline</Title>
      <Paragraph>
        Track the project's funding status and development progress to make
        informed decisions and plan future steps.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card
            title="Funding Status"
            extra={<i className="las la-money-bill-wave"></i>}
          >
            <Title level={4}>Total Funding: ${totalFunding.toFixed(2)}</Title>
            <Paragraph>
              Latest Status: <Text strong>{latestFundingStatus?.status}</Text>
            </Paragraph>
            <Paragraph>
              Last Updated:{' '}
              {latestFundingStatus
                ? dayjs(latestFundingStatus.date).format('MMMM D, YYYY')
                : 'N/A'}
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card
            title="Security Implementation"
            extra={<i className="las la-shield-alt"></i>}
          >
            <Progress
              percent={Math.min(100, (securityProtocols?.length || 0) * 20)}
              status="active"
              format={percent => `${percent}% Implemented`}
            />
            <Paragraph>
              Latest Protocol: {securityProtocols?.[0]?.name || 'N/A'}
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Card
        title="Development Timeline"
        style={{ marginTop: '16px' }}
        extra={<i className="las la-stream"></i>}
      >
        <Timeline mode="alternate">
          {fundingStatuses?.map((status, index) => (
            <Timeline.Item
              key={status.id}
              color={index === 0 ? 'green' : 'blue'}
            >
              <Text strong>{dayjs(status.date).format('MMMM D, YYYY')}</Text>
              <br />
              Funding: ${parseFloat(status.amount).toFixed(2)}
              <br />
              Status: {status.status}
            </Timeline.Item>
          ))}
          {securityProtocols?.map(protocol => (
            <Timeline.Item key={protocol.id} color="red">
              <Text strong>
                {dayjs(protocol.implementationDate).format('MMMM D, YYYY')}
              </Text>
              <br />
              Security Protocol: {protocol.name}
              <br />
              Level: {protocol.level.toString()}
            </Timeline.Item>
          ))}
        </Timeline>
      </Card>
    </PageLayout>
  )
}
