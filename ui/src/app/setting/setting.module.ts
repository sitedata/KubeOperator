import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingComponent} from './setting.component';

import {CoreModule} from '../core/core.module';
import {SystemSettingComponent} from './system-setting/system-setting.component';
import {BackupStorageSettingComponent } from './backup-storage-setting/backup-storage-setting.component';
import {ClusterBackupModule} from '../cluster-backup/cluster-backup.module';
import {BackupStorageSettingModule} from './backup-storage-setting/backup-storage-setting.module';
import {LdapSettingComponent} from './ldap-setting/ldap-setting.component';

@NgModule({
  declarations: [SettingComponent, SystemSettingComponent, BackupStorageSettingComponent, LdapSettingComponent],
  imports: [
    CommonModule,
    CoreModule,

    ClusterBackupModule,
    BackupStorageSettingModule,
  ]
})
export class SettingModule {
}
