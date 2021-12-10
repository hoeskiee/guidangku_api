CREATE TABLE ando(
    id serial,
    name character varying(50),
    color character varying(50),
    size character varying(50),
    price int,
    stock int
);

CREATE TABLE lubrene(
    id serial,
    name character varying(50),
    color character varying(50),
    size character varying(50),
    price int,
    stock int
);

INSERT INTO ando(name, color, size, price, stock)
VALUES
('Nice Like', 'Hitam', '36/40', 56900, 120),
('Nice', 'Hitam', '36/40', 56900, 144),
('Joice', 'Emas', '36/40', 109900, 60);

INSERT INTO lubrene(name, color, size, price, stock)
VALUES
('Master-M', 'Hitam/Merah', '38/42', 54800, 120),
('Bugari-GL', 'Coklat/Bata', '36/40', 72800, 144),
('Bragi-M', 'Merah/Hitam', '38/42', 54800, 60);
