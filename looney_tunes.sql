USE first_sql;

CREATE TABLE looney_tunes(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  bio VARCHAR(255)
);

INSERT INTO looney_tunes (name, bio) VALUES ('Bugs Bunny', 'Bugs Bunny was created in the late 1930s by Leon Schlesinger Productions and voiced by Mel Blanc.');
INSERT INTO looney_tunes (name, bio) VALUES ('Elmer Fudd', 'Elmer J. Fudd is the adversary of Bugs Bunny. His aim is to hunt Bugs and usually ends up injuring himself in the process. He also has a speech impediment.');
INSERT INTO looney_tunes (name, bio) VALUES ('Daffy Duck', 'Daffy Duck a anthropormorphic black duck, was on the first screwball characters that emerged in the 1930s.');
INSERT INTO looney_tunes (name, bio) VALUES ('Porky Pig', 'The first character to draw audiences based on his star power, and animators created many shorts featuring the character.');
INSERT INTO looney_tunes (name, bio) VALUES ('Tweety', 'Tweety, a yellow canary has appeared in 46 cartoons during the Golden Age between 1942 and 1962');





SELECT * FROM looney_tunes;
