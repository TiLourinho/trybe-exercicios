SELECT first_name, last_name FROM sakila.staff
UNION ALL
SELECT first_name, last_name FROM sakila.actor;

SELECT DISTINCT first_name, last_name FROM sakila.customer
	WHERE first_name LIKE '%tracy%'
UNION ALL
SELECT DISTINCT first_name, last_name FROM sakila.actor
	WHERE first_name LIKE '%je%';
    
(SELECT first_name, last_name FROM sakila.actor
	ORDER BY first_name DESC LIMIT 5)
UNION
(SELECT first_name, last_name FROM sakila.staff
	LIMIT 1)
UNION
(SELECT first_name, last_name FROM sakila.customer
	LIMIT 5 OFFSET 14)
ORDER BY first_name;

SELECT LCASE(CONCAT(first_name, ' ', last_name)) AS 'full_name' FROM sakila.customer
UNION ALL
SELECT LCASE(CONCAT(first_name, ' ', last_name)) AS 'full_name' FROM sakila.actor
ORDER BY 'full_name' LIMIT 15 OFFSET 60;