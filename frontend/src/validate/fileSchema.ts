import { string, z } from 'zod';
import { Permission } from '@/features/file/fileStore.type.ts';

const permissionSchema = z.union([
    z.literal(Permission.Read),
    z.literal(Permission.Write),
    z.literal(Permission.Execute),
]);

export const fileSchema = z.object({
    file: z.instanceof(File),
    permission: permissionSchema,
});
