/* eslint-disable */
import type {
  unsetMarker,
  AnyRouter,
  AnyRootConfig,
  CreateRouterInner,
  Procedure,
  ProcedureBuilder,
  ProcedureParams,
  ProcedureRouterRecord,
  ProcedureType,
} from '@trpc/server'
import type { PrismaClient } from '@zenstackhq/runtime/models'
import createUserRouter from './User.router'
import createQuantumPrototypeRouter from './QuantumPrototype.router'
import createAiActuatorRouter from './AiActuator.router'
import createConnectomeStructureRouter from './ConnectomeStructure.router'
import createPythonSnippetRouter from './PythonSnippet.router'
import createCognitiveDataRouter from './CognitiveData.router'
import createSecurityProtocolRouter from './SecurityProtocol.router'
import createFundingStatusRouter from './FundingStatus.router'
import createOrganizationRouter from './Organization.router'
import createOrganizationRoleRouter from './OrganizationRole.router'
import createPwaSubscriptionRouter from './PwaSubscription.router'
import { ClientType as UserClientType } from './User.router'
import { ClientType as QuantumPrototypeClientType } from './QuantumPrototype.router'
import { ClientType as AiActuatorClientType } from './AiActuator.router'
import { ClientType as ConnectomeStructureClientType } from './ConnectomeStructure.router'
import { ClientType as PythonSnippetClientType } from './PythonSnippet.router'
import { ClientType as CognitiveDataClientType } from './CognitiveData.router'
import { ClientType as SecurityProtocolClientType } from './SecurityProtocol.router'
import { ClientType as FundingStatusClientType } from './FundingStatus.router'
import { ClientType as OrganizationClientType } from './Organization.router'
import { ClientType as OrganizationRoleClientType } from './OrganizationRole.router'
import { ClientType as PwaSubscriptionClientType } from './PwaSubscription.router'

export type BaseConfig = AnyRootConfig

export type RouterFactory<Config extends BaseConfig> = <
  ProcRouterRecord extends ProcedureRouterRecord,
>(
  procedures: ProcRouterRecord,
) => CreateRouterInner<Config, ProcRouterRecord>

export type UnsetMarker = typeof unsetMarker

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
  ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>

export function db(ctx: any) {
  if (!ctx.prisma) {
    throw new Error('Missing "prisma" field in trpc context')
  }
  return ctx.prisma as PrismaClient
}

export function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    user: createUserRouter(router, procedure),
    quantumPrototype: createQuantumPrototypeRouter(router, procedure),
    aiActuator: createAiActuatorRouter(router, procedure),
    connectomeStructure: createConnectomeStructureRouter(router, procedure),
    pythonSnippet: createPythonSnippetRouter(router, procedure),
    cognitiveData: createCognitiveDataRouter(router, procedure),
    securityProtocol: createSecurityProtocolRouter(router, procedure),
    fundingStatus: createFundingStatusRouter(router, procedure),
    organization: createOrganizationRouter(router, procedure),
    organizationRole: createOrganizationRoleRouter(router, procedure),
    pwaSubscription: createPwaSubscriptionRouter(router, procedure),
  })
}

export interface ClientType<AppRouter extends AnyRouter> {
  user: UserClientType<AppRouter>
  quantumPrototype: QuantumPrototypeClientType<AppRouter>
  aiActuator: AiActuatorClientType<AppRouter>
  connectomeStructure: ConnectomeStructureClientType<AppRouter>
  pythonSnippet: PythonSnippetClientType<AppRouter>
  cognitiveData: CognitiveDataClientType<AppRouter>
  securityProtocol: SecurityProtocolClientType<AppRouter>
  fundingStatus: FundingStatusClientType<AppRouter>
  organization: OrganizationClientType<AppRouter>
  organizationRole: OrganizationRoleClientType<AppRouter>
  pwaSubscription: PwaSubscriptionClientType<AppRouter>
}
