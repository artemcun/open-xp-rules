{
  "action": "start",
  "object": "process",
  "status": "success",
  "category.generic": "Process",
  "category.high": "Availability Management",
  "category.low": "Control",
  "chain_id": "96903324",
  "datafield1": "reconnectwm.sh",
  "datafield2": "root",
  "datafield3": "0755",
  "datafield4": "/usr/bin/dash",
  "event_src.category": "Operating system",
  "event_src.ip": "10.10.10.10",
  "event_src.rule": "pt_siem_execve",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_process_start",
  "importance": "low",
  "labels": "node_contains_ext_ip",
  "msgid": "execve",
  "numfield2": 0,
  "object.account.domain": "psec",
  "object.account.group": "646F6D61696E2075736572734070747365637",
  "object.account.id": "1702639807",
  "object.account.name": "userrch",
  "object.process.cmdline": "/bin/sh /etc/xrdp/reconnectwm.sh",
  "object.process.cwd": "/home/userrch@psec",
  "object.process.fullpath": "/etc/xrdp/reconnectwm.sh",
  "object.process.id": "2896920",
  "object.process.meta": "/usr/sbin/xrdp-sesman",
  "object.process.name": "reconnectwm.sh",
  "object.process.parent.id": "862",
  "object.process.path": "/etc/xrdp/",
  "subject.account.domain": "psec",
  "subject.account.id": "1702639807",
  "subject.account.name": "userrch",
  "subject.account.privileges": "1702639807",
  "subject.account.session_id": "4294967295",
  "time": "2022-10-03T11:14:17.000Z"
}