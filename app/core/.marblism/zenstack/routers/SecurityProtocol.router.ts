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
      .input($Schema.SecurityProtocolInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).securityProtocol.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.SecurityProtocolInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).securityProtocol.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.SecurityProtocolInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).securityProtocol.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.SecurityProtocolInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).securityProtocol.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.SecurityProtocolInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).securityProtocol.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.SecurityProtocolInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).securityProtocol.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.SecurityProtocolInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).securityProtocol.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.SecurityProtocolInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).securityProtocol.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.SecurityProtocolInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).securityProtocol.update(input as any)),
      ),

    count: procedure
      .input($Schema.SecurityProtocolInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).securityProtocol.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.SecurityProtocolCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.SecurityProtocolCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.SecurityProtocolCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.SecurityProtocolCreateManyArgs>(
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
    useMutation: <T extends Prisma.SecurityProtocolCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.SecurityProtocolCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SecurityProtocolGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.SecurityProtocolGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.SecurityProtocolCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.SecurityProtocolCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.SecurityProtocolGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.SecurityProtocolGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.SecurityProtocolDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.SecurityProtocolDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.SecurityProtocolDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.SecurityProtocolDeleteManyArgs>(
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
    useMutation: <T extends Prisma.SecurityProtocolDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.SecurityProtocolDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SecurityProtocolGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.SecurityProtocolGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.SecurityProtocolDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.SecurityProtocolDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.SecurityProtocolGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.SecurityProtocolGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.SecurityProtocolFindFirstArgs,
      TData = Prisma.SecurityProtocolGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.SecurityProtocolFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.SecurityProtocolGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.SecurityProtocolFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.SecurityProtocolFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.SecurityProtocolGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.SecurityProtocolGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.SecurityProtocolFindManyArgs,
      TData = Array<Prisma.SecurityProtocolGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.SecurityProtocolFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.SecurityProtocolGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.SecurityProtocolFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.SecurityProtocolFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.SecurityProtocolGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.SecurityProtocolGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.SecurityProtocolFindUniqueArgs,
      TData = Prisma.SecurityProtocolGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.SecurityProtocolFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.SecurityProtocolGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.SecurityProtocolFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.SecurityProtocolFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.SecurityProtocolGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.SecurityProtocolGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.SecurityProtocolUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.SecurityProtocolUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.SecurityProtocolUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.SecurityProtocolUpdateManyArgs>(
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
    useMutation: <T extends Prisma.SecurityProtocolUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.SecurityProtocolUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SecurityProtocolGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.SecurityProtocolGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.SecurityProtocolUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.SecurityProtocolUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.SecurityProtocolGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.SecurityProtocolGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.SecurityProtocolCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.SecurityProtocolCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.SecurityProtocolCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.SecurityProtocolCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.SecurityProtocolCountArgs>(
      input?: Omit<
        Prisma.Subset<T, Prisma.SecurityProtocolCountArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.SecurityProtocolCountAggregateOutputType
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
              Prisma.SecurityProtocolCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
