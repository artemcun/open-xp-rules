{
  "subject": "account",
  "action": "access",
  "object": "file_object",
  "status": "failure",
  "category.generic": "File System Object",
  "category.high": "System Management",
  "category.low": "Manipulation",
  "chain_id": "745843268",
  "datafield1": "mc",
  "datafield2": "root",
  "datafield3": "0600",
  "event_src.category": "Operating system",
  "event_src.ip": "192.70.198.184",
  "event_src.rule": "pt_siem_root_read",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_file_operations",
  "importance": "low",
  "labels": "node_contains_ext_ip",
  "logon_service": "pts/0",
  "msgid": "openat",
  "numfield2": 0,
  "object.account.group": "root",
  "object.account.id": "0",
  "object.account.name": "root",
  "object.fullpath": "/root/.local/share/mc/history",
  "object.id": "270884",
  "object.name": "history",
  "object.path": "/root/.local/share/mc/",
  "object.property": "flags",
  "object.state": "r",
  "object.type": "regular_file",
  "object.value": "O_RDONLY|O_EXCL|O_CREAT",
  "reason": "File exists",
  "subject.account.id": "1013",
  "subject.account.name": "dkresko",
  "subject.account.privileges": "0",
  "subject.account.session_id": "52243",
  "subject.process.cwd": "/root",
  "subject.process.fullpath": "/usr/bin/mc",
  "subject.process.id": "1473122",
  "subject.process.meta": "mc",
  "subject.process.name": "mc",
  "subject.process.parent.id": "1473119",
  "subject.process.path": "/usr/bin/",
  "time": "2022-05-12T14:24:53.000Z"
}