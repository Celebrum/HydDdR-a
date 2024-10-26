// import { useUserContext } from '@/core/context'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { Flex } from 'antd'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Mobilebar } from './components/Mobilebar'
import { Topbar } from './components/Topbar'
import { NavigationItem } from './types'
import { useUserContext } from '~/core/context'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useNavigate()
  const pathname = useLocation().pathname
  const params: Record<string, string> = useParams()

  const { organization } = useUserContext()

  const goTo = (url: string) => {
    router(url)
  }

  const items: NavigationItem[] = [
    {
      key: '/home',
      label: 'Home',
      position: 'topbar',

      onClick: () => goTo('/home'),
    },

    {
      key: '/organizations/:organizationId/home',
      label: 'Home Page',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/home'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/prototype',
      label: 'Quantum Computer Prototype',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/prototype'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/ai-integration',
      label: 'AI Integration Dashboard',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/ai-integration'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/connectome',
      label: 'Connectome Configuration',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/connectome'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/data-management',
      label: 'Data Management',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/data-management'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/cognitive-abilities',
      label: 'Cognitive Abilities Monitor',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/cognitive-abilities'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/security',
      label: 'System Security',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/security'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/funding',
      label: 'Funding and Development Timeline',
      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/funding'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/pricing',
      label: 'Pricing',

      position: 'topbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/pricing'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },
  ]

  const itemsVisible = items
    .filter(item => item.isVisible !== false)
    .map(item => ({
      key: item.key,
      label: item.label,
      position: item.position,
      onClick: item.onClick,
    }))

  const itemsTopbar = itemsVisible.filter(item => item.position === 'topbar')

  const itemsLeftbar = itemsVisible.filter(item => item.position === 'leftbar')

  const itemsLeftbottom = itemsVisible.filter(
    item => item.position === 'leftbar-bottom',
  )

  const itemsMobile = itemsVisible

  let keySelected = pathname

  Object.entries(params).forEach(([key, value]) => {
    keySelected = keySelected.replace(`/${value}`, `/:${key}`)
  })

  return (
    <>
      <Topbar keySelected={keySelected} items={itemsTopbar} />

      <Mobilebar keySelected={keySelected} items={itemsMobile} />

      <Flex flex={1} style={{ overflowY: 'hidden' }}>
        <Leftbar
          keySelected={keySelected}
          items={itemsLeftbar}
          itemsBottom={itemsLeftbottom}
        />

        <Flex flex={1} vertical style={{ overflowY: 'hidden' }}>
          {children}
        </Flex>
      </Flex>
    </>
  )
}