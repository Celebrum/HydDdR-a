/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from '.'
import * as _Schema from '@zenstackhq/runtime/zod/input'
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema
import { checkRead, checkMutate } from '../helper'
import type { Prisma } from '@zenstackhq/runtime/models'
import type {
  UseTRPCMutationOptions,
  UseTRPCMutationResult,
  UseTRPCQueryOptions,
  UseTRPCQueryResult,
  UseTRPCInfiniteQueryOptions,
  UseTRPCInfiniteQueryResult,
} from '@trpc/react-query/shared'
import type { TRPCClientErrorLike } from '@trpc/client'
import type { AnyRouter } from '@trpc/server'

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    createMany: procedure
      .input($Schema.FundingStatusInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).fundingStatus.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.FundingStatusInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).fundingStatus.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.FundingStatusInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).fundingStatus.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.FundingStatusInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).fundingStatus.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.FundingStatusInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).fundingStatus.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.FundingStatusInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).fundingStatus.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.FundingStatusInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).fundingStatus.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.FundingStatusInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).fundingStatus.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.FundingStatusInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).fundingStatus.update(input as any)),
      ),

    count: procedure
      .input($Schema.FundingStatusInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).fundingStatus.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.FundingStatusCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.FundingStatusCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.FundingStatusCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.FundingStatusCreateManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  create: {
    useMutation: <T extends Prisma.FundingStatusCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.FundingStatusCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.FundingStatusGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.FundingStatusGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.FundingStatusCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.FundingStatusCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.FundingStatusGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.FundingStatusGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.FundingStatusDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.FundingStatusDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.FundingStatusDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.FundingStatusDeleteManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  delete: {
    useMutation: <T extends Prisma.FundingStatusDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.FundingStatusDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.FundingStatusGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.FundingStatusGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.FundingStatusDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.FundingStatusDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.FundingStatusGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.FundingStatusGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.FundingStatusFindFirstArgs,
      TData = Prisma.FundingStatusGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.FundingStatusFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.FundingStatusGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.FundingStatusFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.FundingStatusFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.FundingStatusGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.FundingStatusGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.FundingStatusFindManyArgs,
      TData = Array<Prisma.FundingStatusGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.FundingStatusFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.FundingStatusGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.FundingStatusFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.FundingStatusFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.FundingStatusGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.FundingStatusGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.FundingStatusFindUniqueArgs,
      TData = Prisma.FundingStatusGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.FundingStatusFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.FundingStatusGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.FundingStatusFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.FundingStatusFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.FundingStatusGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.FundingStatusGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.FundingStatusUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.FundingStatusUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.FundingStatusUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.FundingStatusUpdateManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  update: {
    useMutation: <T extends Prisma.FundingStatusUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.FundingStatusUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.FundingStatusGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.FundingStatusGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.FundingStatusUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.FundingStatusUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.FundingStatusGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.FundingStatusGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.FundingStatusCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.FundingStatusCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.FundingStatusCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.FundingStatusCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.FundingStatusCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.FundingStatusCountArgs>, 'cursor'>,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.FundingStatusCountAggregateOutputType
              >
          : number,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.FundingStatusCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
