-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

SELECT active, COUNT(*) AS 'registered'
	FROM sakila.customer
	GROUP BY active;
    
SELECT store_id, active, COUNT(*) AS 'registered'
	FROM sakila.customer
    GROUP BY store_id, active;
    
SELECT rating, AVG(rental_duration) AS 'average_rental_duration'
	FROM sakila.film
    GROUP BY rating ORDER BY rating DESC;
    
SELECT district, COUNT(address) AS 'address_quantity'
	FROM sakila.address
    GROUP BY district ORDER BY COUNT(address) DESC;
    
SELECT rating, AVG(length) AS 'average_length'
    FROM sakila.film
    GROUP BY rating
	HAVING average_length BETWEEN 115.0 AND 121.50
    ORDER BY average_length DESC;
    
SELECT rating, SUM(replacement_cost) AS 'total_cost'
    FROM sakila.film
    GROUP by rating
    HAVING total_cost > 3950.50
    ORDER BY total_cost;