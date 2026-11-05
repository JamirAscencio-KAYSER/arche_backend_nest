import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdentityModule } from './modules/identity/identity.module';
import { UsersModule } from './modules/users/users.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { AuditModule } from './modules/audit/audit.module';
import { CatalogModule } from './modules/catalog/catalog.module';
import { CustomersModule } from './modules/customers/customers.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { OrganizationModule } from './modules/organization/organization.module';
import { SalesModule } from './modules/sales/sales.module';
import { SessionsModule } from './modules/sessions/sessions.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    IdentityModule,
    UsersModule,
    AuthorizationModule,
    AuditModule,
    CatalogModule,
    CustomersModule,
    InventoryModule,
    NotificationsModule,
    OrganizationModule,
    SalesModule,
    SessionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
