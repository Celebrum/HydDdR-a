import React from 'react'
import { Typography, Card, Row, Col, Statistic, Spin } from 'antd'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AIIntegrationDashboardPage() {
  const { organizationId } = useParams()

  const { data: aiActuators, isLoading } = Api.aiActuator.findMany.useQuery({
    where: { organizationId },
  })

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return '#52c41a'
      case 'inactive':
        return '#f5222d'
      default:
        return '#faad14'
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>AI Integration Dashboard</Title>
      <Paragraph>
        Monitor the status of AI integration with the quantum system and the
        performance of AI actuators.
      </Paragraph>

      {isLoading ? (
        <Spin size="large" />
      ) : (
        <Row gutter={[16, 16]}>
          {aiActuators?.map(actuator => (
            <Col xs={24} sm={12} md={6} key={actuator.id}>
              <Card
                title={
                  <span>
                    <i
                      className={`las la-robot`}
                      style={{ marginRight: '8px' }}
                    />
                    {actuator.name}
                  </span>
                }
                hoverable
              >
                <Statistic
                  title="Type"
                  value={actuator.type}
                  valueStyle={{ fontSize: '16px' }}
                />
                <Statistic
                  title="Status"
                  value={actuator.status}
                  valueStyle={{
                    color: getStatusColor(actuator.status),
                    fontSize: '16px',
                  }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Title level={3} style={{ marginTop: '32px' }}>
        AI Actuators Performance
      </Title>
      <Row gutter={[16, 16]}>
        {['NeuUuR-o', 'ReaAaS-N', 'CeLeBrUm', 'SenNnT-i'].map(actuator => (
          <Col xs={24} sm={12} md={6} key={actuator}>
            <Card
              title={
                <span>
                  <i
                    className={`las la-chart-line`}
                    style={{ marginRight: '8px' }}
                  />
                  {actuator}
                </span>
              }
              hoverable
            >
              <Statistic
                title="Performance"
                value={Math.floor(Math.random() * 100)}
                suffix="%"
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
