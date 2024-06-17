{
  "subject": "account",
  "action": "create",
  "object": "file_object",
  "status": "success",
  "category.generic": "File System Object",
  "category.high": "System Management",
  "category.low": "Manipulation",
  "chain_id": "28405",
  "datafield1": "nano",
  "datafield3": "0644",
  "event_src.category": "Operating system",
  "event_src.hostname": "debian-test",
  "event_src.rule": "pt_siem_home_modify_evil",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_file_operations",
  "importance": "low",
  "logon_service": "pts/0",
  "msgid": "open",
  "numfield2": 0,
  "object.account.group": "0",
  "object.account.id": "0",
  "object.fullpath": "/home/odmin/test",
  "object.id": "655470",
  "object.name": "test",
  "object.path": "/home/odmin/",
  "object.property": "flags",
  "object.state": "w",
  "object.type": "regular_file",
  "object.value": "O_WRONLY|O_CREAT|O_TRUNC",
  "subject.account.id": "1000",
  "subject.account.privileges": "0",
  "subject.account.session_id": "178",
  "subject.process.cwd": "/root",
  "subject.process.fullpath": "/bin/nano",
  "subject.process.id": "2424",
  "subject.process.meta": "nano /home/odmin/test",
  "subject.process.name": "nano",
  "subject.process.parent.id": "2423",
  "subject.process.path": "/bin/",
  "time": "2019-04-29T16:43:33.000Z"
}