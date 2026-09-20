# CLAUDE.md — jornada

Public repository. Every submodule here is private, and most are referenced
by hash, not by name — the structure itself must not reveal what each area
actually is.

**All rules and reference material live inside `proxy/`.** Before doing any
work in this repository, read `proxy/CLAUDE.md`. Do not assume any rule from
this file alone; if it's not in `proxy/`, ask.

## Hash resolution

Folder and repository names here are opaque hashes on purpose — never
document here what each one corresponds to. Whenever you need to know what a
hash represents (the real repository, the life area), the answer lives in
`proxy/mapa.json`, never in this repository. Resolve it there — do not
hardcode the mapping in any public file.
