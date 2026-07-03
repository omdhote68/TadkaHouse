/*
# Create reservations table (single-tenant, no auth)

1. New Tables
- `reservations`
- `id` (uuid, primary key)
- `name` (text, not null) — guest's full name
- `phone` (text, not null) — contact number
- `guests` (int, not null) — number of guests
- `date` (date, not null) — reservation date
- `time` (text, not null) — reservation time slot
- `special_request` (text, nullable) — optional special requests
- `status` (text, default 'pending') — pending / confirmed / cancelled
- `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `reservations`.
- Allow anon + authenticated INSERT only (guests submit reservations without sign-in).
- No public SELECT/UPDATE/DELETE to protect guest data.
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  guests int NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  special_request text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_reservations" ON reservations;
CREATE POLICY "anon_insert_reservations" ON reservations FOR INSERT
TO anon, authenticated WITH CHECK (true);
