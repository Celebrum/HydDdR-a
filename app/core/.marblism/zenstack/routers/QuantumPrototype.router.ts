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
      .input($Schema.QuantumPrototypeInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).quantumPrototype.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.QuantumPrototypeInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).quantumPrototype.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.QuantumPrototypeInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).quantumPrototype.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.QuantumPrototypeInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).quantumPrototype.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.QuantumPrototypeInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).quantumPrototype.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.QuantumPrototypeInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).quantumPrototype.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.QuantumPrototypeInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).quantumPrototype.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.QuantumPrototypeInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).quantumPrototype.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.QuantumPrototypeInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).quantumPrototype.update(input as any)),
      ),

    count: procedure
      .input($Schema.QuantumPrototypeInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).quantumPrototype.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.QuantumPrototypeCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.QuantumPrototypeCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.QuantumPrototypeCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.QuantumPrototypeCreateManyArgs>(
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
    useMutation: <T extends Prisma.QuantumPrototypeCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.QuantumPrototypeCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.QuantumPrototypeGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.QuantumPrototypeGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.QuantumPrototypeCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.QuantumPrototypeCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.QuantumPrototypeGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.QuantumPrototypeGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.QuantumPrototypeDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.QuantumPrototypeDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.QuantumPrototypeDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.QuantumPrototypeDeleteManyArgs>(
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
    useMutation: <T extends Prisma.QuantumPrototypeDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.QuantumPrototypeDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.QuantumPrototypeGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.QuantumPrototypeGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.QuantumPrototypeDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.QuantumPrototypeDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.QuantumPrototypeGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.QuantumPrototypeGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.QuantumPrototypeFindFirstArgs,
      TData = Prisma.QuantumPrototypeGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.QuantumPrototypeFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.QuantumPrototypeGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.QuantumPrototypeFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.QuantumPrototypeFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.QuantumPrototypeGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.QuantumPrototypeGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.QuantumPrototypeFindManyArgs,
      TData = Array<Prisma.QuantumPrototypeGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.QuantumPrototypeFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.QuantumPrototypeGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.QuantumPrototypeFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.QuantumPrototypeFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.QuantumPrototypeGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.QuantumPrototypeGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.QuantumPrototypeFindUniqueArgs,
      TData = Prisma.QuantumPrototypeGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.QuantumPrototypeFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.QuantumPrototypeGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.QuantumPrototypeFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.QuantumPrototypeFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.QuantumPrototypeGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.QuantumPrototypeGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.QuantumPrototypeUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.QuantumPrototypeUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.QuantumPrototypeUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.QuantumPrototypeUpdateManyArgs>(
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
    useMutation: <T extends Prisma.QuantumPrototypeUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.QuantumPrototypeUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.QuantumPrototypeGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.QuantumPrototypeGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.QuantumPrototypeUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.QuantumPrototypeUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.QuantumPrototypeGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.QuantumPrototypeGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.QuantumPrototypeCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.QuantumPrototypeCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.QuantumPrototypeCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.QuantumPrototypeCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.QuantumPrototypeCountArgs>(
      input?: Omit<
        Prisma.Subset<T, Prisma.QuantumPrototypeCountArgs>,
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
                Prisma.QuantumPrototypeCountAggregateOutputType
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
              Prisma.QuantumPrototypeCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
