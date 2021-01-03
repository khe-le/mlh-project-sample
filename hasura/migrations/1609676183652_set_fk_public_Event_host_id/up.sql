alter table "public"."Event"
           add constraint "Event_host_id_fkey"
           foreign key ("host_id")
           references "public"."User"
           ("id") on update restrict on delete restrict;
