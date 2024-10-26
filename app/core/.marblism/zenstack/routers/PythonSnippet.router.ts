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
      .input($Schema.PythonSnippetInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pythonSnippet.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.PythonSnippetInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pythonSnippet.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.PythonSnippetInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pythonSnippet.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.PythonSnippetInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pythonSnippet.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.PythonSnippetInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).pythonSnippet.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.PythonSnippetInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).pythonSnippet.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.PythonSnippetInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).pythonSnippet.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.PythonSnippetInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pythonSnippet.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.PythonSnippetInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pythonSnippet.update(input as any)),
      ),

    count: procedure
      .input($Schema.PythonSnippetInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).pythonSnippet.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.PythonSnippetCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PythonSnippetCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PythonSnippetCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.PythonSnippetCreateManyArgs>(
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
    useMutation: <T extends Prisma.PythonSnippetCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PythonSnippetCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.PythonSnippetGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.PythonSnippetGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PythonSnippetCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.PythonSnippetCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.PythonSnippetGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.PythonSnippetGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.PythonSnippetDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PythonSnippetDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PythonSnippetDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.PythonSnippetDeleteManyArgs>(
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
    useMutation: <T extends Prisma.PythonSnippetDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PythonSnippetDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.PythonSnippetGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.PythonSnippetGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PythonSnippetDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.PythonSnippetDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.PythonSnippetGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.PythonSnippetGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.PythonSnippetFindFirstArgs,
      TData = Prisma.PythonSnippetGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.PythonSnippetFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.PythonSnippetGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.PythonSnippetFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.PythonSnippetFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.PythonSnippetGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.PythonSnippetGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.PythonSnippetFindManyArgs,
      TData = Array<Prisma.PythonSnippetGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.PythonSnippetFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.PythonSnippetGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.PythonSnippetFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.PythonSnippetFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.PythonSnippetGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.PythonSnippetGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.PythonSnippetFindUniqueArgs,
      TData = Prisma.PythonSnippetGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.PythonSnippetFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.PythonSnippetGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.PythonSnippetFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.PythonSnippetFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.PythonSnippetGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.PythonSnippetGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.PythonSnippetUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PythonSnippetUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PythonSnippetUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.PythonSnippetUpdateManyArgs>(
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
    useMutation: <T extends Prisma.PythonSnippetUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PythonSnippetUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.PythonSnippetGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.PythonSnippetGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PythonSnippetUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.PythonSnippetUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.PythonSnippetGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.PythonSnippetGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.PythonSnippetCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.PythonSnippetCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.PythonSnippetCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.PythonSnippetCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.PythonSnippetCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.PythonSnippetCountArgs>, 'cursor'>,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.PythonSnippetCountAggregateOutputType
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
              Prisma.PythonSnippetCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
