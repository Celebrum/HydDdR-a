import React from 'react'
import { Typography, Row, Col, Card } from 'antd'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <PageLayout layout="narrow">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col xs={24} sm={20} md={16} lg={12}>
          <Card
            hoverable
            style={{
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            }}
            onClick={() => navigate('/organizations/:organizationId/home')}
          >
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <i
                className="las la-laptop"
                style={{ fontSize: '80px', color: '#1890ff' }}
              ></i>
              <Title level={2}>Welcome to Hydra Electromagnetic System</Title>
              <Paragraph>
                Your personal portable quantum computer, running exclusively
                online.
              </Paragraph>
            </div>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Card>
                  <Title level={4}>
                    <i className="las la-microchip"></i> Quantum Power
                  </Title>
                  <Paragraph>
                    Experience the cutting-edge technology of quantum computing
                    right from your browser.
                  </Paragraph>
                </Card>
              </Col>
              <Col span={24}>
                <Card>
                  <Title level={4}>
                    <i className="las la-globe"></i> Online Accessibility
                  </Title>
                  <Paragraph>
                    Access your quantum computer from anywhere with an internet
                    connection.
                  </Paragraph>
                </Card>
              </Col>
              <Col span={24}>
                <Card>
                  <Title level={4}>
                    <i className="las la-lock"></i> Secure and Private
                  </Title>
                  <Paragraph>
                    Your data and computations are protected with
                    state-of-the-art security protocols.
                  </Paragraph>
                </Card>
              </Col>
            </Row>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Paragraph strong>
                Click anywhere on this card to start your quantum journey!
              </Paragraph>
            </div>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
