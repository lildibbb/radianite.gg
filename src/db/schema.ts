
export * from './auth-schema';

import {
    pgTable,
    uuid,
    varchar,
    integer,
    boolean,
    timestamp, text,
} from 'drizzle-orm/pg-core';
import { user } from './auth-schema';


export const valorantAccounts = pgTable('valorant_accounts', {
    id: uuid('id').primaryKey().defaultRandom(),
    user_id: text('user_id')
        .references(() => user.id, { onDelete: 'cascade' })
        .notNull(),
    riot_id: varchar('riot_id', { length: 255 }).notNull(),
    region: varchar('region', { length: 50 }),
    rank: varchar('rank', { length: 50 }),
    elo: integer('elo'),
    skins_owned: integer('skins_owned').default(0),
    is_active: boolean('is_active').default(true).notNull(),
    created_at: timestamp('created_at').defaultNow().notNull(),
    updated_at: timestamp('updated_at').defaultNow().notNull(),
});
