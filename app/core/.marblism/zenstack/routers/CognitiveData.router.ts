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
      .input($Schema.CognitiveDataInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cognitiveData.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.CognitiveDataInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cognitiveData.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.CognitiveDataInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cognitiveData.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.CognitiveDataInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cognitiveData.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.CognitiveDataInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).cognitiveData.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.CognitiveDataInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).cognitiveData.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.CognitiveDataInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).cognitiveData.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.CognitiveDataInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cognitiveData.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.CognitiveDataInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cognitiveData.update(input as any)),
      ),

    count: procedure
      .input($Schema.CognitiveDataInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).cognitiveData.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.CognitiveDataCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CognitiveDataCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CognitiveDataCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CognitiveDataCreateManyArgs>(
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
    useMutation: <T extends Prisma.CognitiveDataCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CognitiveDataCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.CognitiveDataGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.CognitiveDataGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CognitiveDataCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CognitiveDataCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.CognitiveDataGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.CognitiveDataGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.CognitiveDataDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CognitiveDataDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CognitiveDataDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CognitiveDataDeleteManyArgs>(
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
    useMutation: <T extends Prisma.CognitiveDataDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CognitiveDataDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.CognitiveDataGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.CognitiveDataGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CognitiveDataDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CognitiveDataDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.CognitiveDataGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.CognitiveDataGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.CognitiveDataFindFirstArgs,
      TData = Prisma.CognitiveDataGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.CognitiveDataFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.CognitiveDataGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.CognitiveDataFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.CognitiveDataFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.CognitiveDataGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.CognitiveDataGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.CognitiveDataFindManyArgs,
      TData = Array<Prisma.CognitiveDataGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.CognitiveDataFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.CognitiveDataGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.CognitiveDataFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.CognitiveDataFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.CognitiveDataGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.CognitiveDataGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.CognitiveDataFindUniqueArgs,
      TData = Prisma.CognitiveDataGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.CognitiveDataFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.CognitiveDataGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.CognitiveDataFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.CognitiveDataFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.CognitiveDataGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.CognitiveDataGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.CognitiveDataUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CognitiveDataUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CognitiveDataUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CognitiveDataUpdateManyArgs>(
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
    useMutation: <T extends Prisma.CognitiveDataUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CognitiveDataUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.CognitiveDataGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.CognitiveDataGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CognitiveDataUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CognitiveDataUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.CognitiveDataGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.CognitiveDataGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.CognitiveDataCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.CognitiveDataCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.CognitiveDataCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.CognitiveDataCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.CognitiveDataCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.CognitiveDataCountArgs>, 'cursor'>,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.CognitiveDataCountAggregateOutputType
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
              Prisma.CognitiveDataCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
