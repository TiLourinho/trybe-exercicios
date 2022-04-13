SELECT * FROM Pixar.Theater;

-- 1
SELECT M.title, B.domestic_sales, B.international_sales
	FROM Pixar.Movies AS M
    INNER JOIN Pixar.BoxOffice AS B
    ON M.id = B.movie_id;
    
-- 2
SELECT M.title, B.international_sales
	FROM Pixar.Movies AS M
    INNER JOIN Pixar.BoxOffice AS B
    ON M.id = B.movie_id
    WHERE B.international_sales > B.domestic_sales;
    
-- 3
SELECT M.title, B.rating
	FROM Pixar.Movies AS M
    INNER JOIN Pixar.BoxOffice AS B
    ON M.id = B.movie_id
    ORDER BY B.rating DESC;

-- 4
SELECT T.name, T.location, M.title, M.director, M.year, M.length_minutes
	FROM Pixar.Theater AS T
    LEFT JOIN Pixar.Movies AS M
    ON T.id = M.theater_id
    ORDER BY T.name;
    
-- 5
SELECT T.name, T.location, M.title, M.director, M.year, M.length_minutes
	FROM Pixar.Theater AS T
    RIGHT JOIN Pixar.Movies AS M
    ON T.id = M.theater_id
    ORDER BY T.name;