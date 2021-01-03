CREATE TABLE public."Attendee" (
    id integer NOT NULL,
    name text NOT NULL,
    affiliation text NOT NULL,
    email text NOT NULL,
    event_id integer NOT NULL
);
CREATE TABLE public."Resources_Data" (
    id integer NOT NULL,
    name text NOT NULL,
    url text,
    "mediaType" text NOT NULL,
    event_id integer
);
CREATE SEQUENCE public."Resources_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Resources_id_seq" OWNED BY public."Resources_Data".id;
CREATE TABLE public."User" (
    id text NOT NULL,
    name text NOT NULL,
    email text NOT NULL
);
ALTER TABLE ONLY public."Resources_Data" ALTER COLUMN id SET DEFAULT nextval('public."Resources_id_seq"'::regclass);
ALTER TABLE ONLY public."Attendee"
    ADD CONSTRAINT "Attendee_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Resources_Data"
    ADD CONSTRAINT "Resources_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
