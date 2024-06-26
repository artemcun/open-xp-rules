{
  "subject": "process",
  "action": "elevate",
  "object": "process",
  "status": "success",
  "category.generic": "Process",
  "category.high": "Users And Rights Management",
  "category.low": "Manipulation",
  "chain_id": "642",
  "datafield1": "ntpd",
  "event_src.category": "Operating system",
  "event_src.ip": "10.19.20.11",
  "event_src.rule": "pt_siem_api_caps",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_capabilities_modify",
  "importance": "low",
  "labels": "node_contains_ext_ip",
  "msgid": "capset",
  "object.account.group": "ntp",
  "object.account.id": "107",
  "object.account.name": "ntp",
  "object.new_value": "0000000002000400",
  "object.process.id": "936",
  "object.property": "effective_capabilities",
  "object.state": "capabilities_change",
  "subject.account.id": "107",
  "subject.account.name": "ntp",
  "subject.account.privileges": "107",
  "subject.account.session_id": "4294967295",
  "subject.process.fullpath": "/usr/sbin/ntpd",
  "subject.process.id": "936",
  "subject.process.meta": "/usr/sbin/ntpd -p /var/run/ntpd.pid -g -u 107:111",
  "subject.process.name": "ntpd",
  "subject.process.parent.id": "1",
  "subject.process.path": "/usr/sbin/",
  "time": "2021-08-23T13:55:33.000Z"
}