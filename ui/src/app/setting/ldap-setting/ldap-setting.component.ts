import {Component, OnInit} from '@angular/core';
import {LdapSettingService} from '../setting.service';
import {LdapSetting} from '../setting';
import {CommonAlertService} from '../../base/header/common-alert.service';
import {AlertLevels} from '../../base/header/components/common-alert/alert';
import * as globals from '../../globals';


@Component({
  selector: 'app-ldap-setting',
  templateUrl: './ldap-setting.component.html',
  styleUrls: ['./ldap-setting.component.css']
})
export class LdapSettingComponent implements OnInit {


  domain_pattern = globals.domain_pattern;

  constructor(private  ldapSettingService: LdapSettingService, private alert: CommonAlertService) {
  }

  ldapSetting: LdapSetting;
  getLdapInfo() {
    this.ldapSetting = {'ldapUrl': '1234'};
  }

  ngOnInit() {
    this.getLdapInfo();
  }


  onCancel() {
  }

  onReset() {
  }

  onTestLink() {
  }

  onImport() {
  }

  onSubmit() {

  }

  validate(setting) {
    this.alert.showAlert('请输入正确的 LDAP 地址！', AlertLevels.ERROR);
    return true;
  }
}
