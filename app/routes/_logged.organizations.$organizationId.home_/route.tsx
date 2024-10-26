import { Typography, Card, Row, Col, Button } from 'antd'
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

  const mainSections = [
    {
      title: 'Quantum Computer Prototype',
      path: '/organizations/:organizationId/prototype',
      icon: 'las la-atom',
    },
    {
      title: 'AI Integration Dashboard',
      path: '/organizations/:organizationId/ai-integration',
      icon: 'las la-robot',
    },
    {
      title: 'Connectome Configuration',
      path: '/organizations/:organizationId/connectome',
      icon: 'las la-brain',
    },
    {
      title: 'Data Management',
      path: '/organizations/:organizationId/data-management',
      icon: 'las la-database',
    },
    {
      title: 'Cognitive Abilities Monitor',
      path: '/organizations/:organizationId/cognitive-abilities',
      icon: 'las la-chart-line',
    },
    {
      title: 'System Security',
      path: '/organizations/:organizationId/security',
      icon: 'las la-shield-alt',
    },
    {
      title: 'Funding and Development Timeline',
      path: '/organizations/:organizationId/funding',
      icon: 'las la-calendar-alt',
    },
  ]

  return (
    <PageLayout layout="narrow">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={1}>Hydra-Electromagnetic System Project</Title>
        <Paragraph>
          Welcome to the Hydra-Electromagnetic System project overview. This
          revolutionary project aims to integrate quantum computing, artificial
          intelligence, and advanced neuroscience to create a groundbreaking
          system with unprecedented capabilities.
        </Paragraph>
      </div>

      <Card>
        <Title level={2}>Project Overview</Title>
        <Paragraph>
          The Hydra-Electromagnetic System is a cutting-edge initiative that
          combines the power of quantum computing with advanced AI and
          neuroscience. Our goal is to develop a system capable of solving
          complex problems, enhancing cognitive abilities, and pushing the
          boundaries of what's possible in computational science.
        </Paragraph>
        <Paragraph>Key features of the project include:</Paragraph>
        <ul>
          <li>Quantum computer prototype development</li>
          <li>AI integration for enhanced problem-solving</li>
          <li>Connectome-based neural network configuration</li>
          <li>Advanced data management and analysis</li>
          <li>Cognitive abilities monitoring and enhancement</li>
          <li>Robust security protocols</li>
          <li>Structured funding and development timeline</li>
        </ul>
      </Card>

      <Title level={2} style={{ marginTop: '2rem', textAlign: 'center' }}>
        Main Sections
      </Title>
      <Row gutter={[16, 16]} style={{ marginTop: '1rem' }}>
        {mainSections.map((section, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              style={{ height: '100%' }}
              onClick={() => navigate(section.path)}
            >
              <div style={{ textAlign: 'center' }}>
                <i
                  className={`${section.icon} fa-3x`}
                  style={{ marginBottom: '1rem' }}
                ></i>
                <Title level={4}>{section.title}</Title>
                <Button type="primary">Go to Section</Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
