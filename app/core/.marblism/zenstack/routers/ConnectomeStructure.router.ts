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
      .input($Schema.ConnectomeStructureInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).connectomeStructure.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.ConnectomeStructureInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).connectomeStructure.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.ConnectomeStructureInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).connectomeStructure.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.ConnectomeStructureInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).connectomeStructure.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.ConnectomeStructureInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).connectomeStructure.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.ConnectomeStructureInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).connectomeStructure.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.ConnectomeStructureInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).connectomeStructure.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.ConnectomeStructureInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).connectomeStructure.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.ConnectomeStructureInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).connectomeStructure.update(input as any)),
      ),

    count: procedure
      .input($Schema.ConnectomeStructureInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).connectomeStructure.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.ConnectomeStructureCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.ConnectomeStructureCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.ConnectomeStructureCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.ConnectomeStructureCreateManyArgs>(
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
    useMutation: <T extends Prisma.ConnectomeStructureCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.ConnectomeStructureCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.ConnectomeStructureGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.ConnectomeStructureGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.ConnectomeStructureCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.ConnectomeStructureCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.ConnectomeStructureGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.ConnectomeStructureGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.ConnectomeStructureDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.ConnectomeStructureDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.ConnectomeStructureDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.ConnectomeStructureDeleteManyArgs>(
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
    useMutation: <T extends Prisma.ConnectomeStructureDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.ConnectomeStructureDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.ConnectomeStructureGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.ConnectomeStructureGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.ConnectomeStructureDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.ConnectomeStructureDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.ConnectomeStructureGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.ConnectomeStructureGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.ConnectomeStructureFindFirstArgs,
      TData = Prisma.ConnectomeStructureGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.ConnectomeStructureFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.ConnectomeStructureGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.ConnectomeStructureFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.ConnectomeStructureFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.ConnectomeStructureGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.ConnectomeStructureGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.ConnectomeStructureFindManyArgs,
      TData = Array<Prisma.ConnectomeStructureGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.ConnectomeStructureFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.ConnectomeStructureGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.ConnectomeStructureFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.ConnectomeStructureFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.ConnectomeStructureGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.ConnectomeStructureGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.ConnectomeStructureFindUniqueArgs,
      TData = Prisma.ConnectomeStructureGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.ConnectomeStructureFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.ConnectomeStructureGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.ConnectomeStructureFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.ConnectomeStructureFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.ConnectomeStructureGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.ConnectomeStructureGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.ConnectomeStructureUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.ConnectomeStructureUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.ConnectomeStructureUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.ConnectomeStructureUpdateManyArgs>(
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
    useMutation: <T extends Prisma.ConnectomeStructureUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.ConnectomeStructureUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.ConnectomeStructureGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.ConnectomeStructureGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.ConnectomeStructureUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.ConnectomeStructureUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.ConnectomeStructureGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.ConnectomeStructureGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.ConnectomeStructureCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.ConnectomeStructureCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.ConnectomeStructureCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.ConnectomeStructureCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.ConnectomeStructureCountArgs>(
      input?: Omit<
        Prisma.Subset<T, Prisma.ConnectomeStructureCountArgs>,
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
                Prisma.ConnectomeStructureCountAggregateOutputType
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
              Prisma.ConnectomeStructureCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
