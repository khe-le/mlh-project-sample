alter table "public"."Resources_Data"
           add constraint "Resources_Data_event_id_fkey"
           foreign key ("event_id")
           references "public"."Event"
           ("id") on update restrict on delete restrict;
