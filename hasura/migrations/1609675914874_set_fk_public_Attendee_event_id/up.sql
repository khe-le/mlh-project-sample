alter table "public"."Attendee"
           add constraint "Attendee_event_id_fkey"
           foreign key ("event_id")
           references "public"."Event"
           ("id") on update restrict on delete restrict;
