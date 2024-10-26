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
      .input($Schema.AiActuatorInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).aiActuator.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.AiActuatorInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).aiActuator.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.AiActuatorInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).aiActuator.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.AiActuatorInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).aiActuator.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.AiActuatorInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).aiActuator.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.AiActuatorInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).aiActuator.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.AiActuatorInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).aiActuator.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.AiActuatorInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).aiActuator.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.AiActuatorInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).aiActuator.update(input as any)),
      ),

    count: procedure
      .input($Schema.AiActuatorInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).aiActuator.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.AiActuatorCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.AiActuatorCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.AiActuatorCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.AiActuatorCreateManyArgs>(
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
    useMutation: <T extends Prisma.AiActuatorCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.AiActuatorCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.AiActuatorGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.AiActuatorGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.AiActuatorCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.AiActuatorCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.AiActuatorGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.AiActuatorGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.AiActuatorDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.AiActuatorDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.AiActuatorDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.AiActuatorDeleteManyArgs>(
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
    useMutation: <T extends Prisma.AiActuatorDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.AiActuatorDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.AiActuatorGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.AiActuatorGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.AiActuatorDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.AiActuatorDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.AiActuatorGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.AiActuatorGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.AiActuatorFindFirstArgs,
      TData = Prisma.AiActuatorGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.AiActuatorFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.AiActuatorGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.AiActuatorFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.AiActuatorFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.AiActuatorGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.AiActuatorGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.AiActuatorFindManyArgs,
      TData = Array<Prisma.AiActuatorGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.AiActuatorFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.AiActuatorGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.AiActuatorFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.AiActuatorFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.AiActuatorGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.AiActuatorGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.AiActuatorFindUniqueArgs,
      TData = Prisma.AiActuatorGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.AiActuatorFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.AiActuatorGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.AiActuatorFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.AiActuatorFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.AiActuatorGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.AiActuatorGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.AiActuatorUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.AiActuatorUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.AiActuatorUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.AiActuatorUpdateManyArgs>(
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
    useMutation: <T extends Prisma.AiActuatorUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.AiActuatorUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.AiActuatorGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.AiActuatorGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.AiActuatorUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.AiActuatorUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.AiActuatorGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.AiActuatorGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.AiActuatorCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.AiActuatorCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.AiActuatorCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.AiActuatorCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.AiActuatorCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.AiActuatorCountArgs>, 'cursor'>,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.AiActuatorCountAggregateOutputType
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
              Prisma.AiActuatorCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
