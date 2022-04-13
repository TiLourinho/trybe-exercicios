SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS 'full_name', f.film_id
	FROM sakila.actor AS a
    INNER JOIN sakila.film_actor AS f
    ON a.actor_id = f.actor_id;

SELECT CONCAT(staff.first_name, ' ', staff.last_name) AS 'full_name', address.address_id
	FROM sakila.staff AS staff
	INNER JOIN sakila.address AS address
    ON staff.address_id = address.address_id;
    
SELECT C.customer_id, CONCAT(C.first_name, ' ', C.last_name) AS 'full_name', C.email, A.address_id, A.address
	FROM sakila.customer AS C
    INNER JOIN sakila.address AS A
    ON C.address_id = A.address_id
    ORDER BY 'full_name' DESC LIMIT 100;

SELECT CONCAT(C.first_name, ' ', C.last_name) AS 'full_name', C.email, A.address_id, A.address, A.district
	FROM sakila.customer AS C
    INNER JOIN sakila.address AS A
    ON C.address_id = A.address_id
    WHERE A.district = 'California' AND C.first_name LIKE '%rene%';
    
SELECT CONCAT(C.first_name, ' ', C.last_name) AS 'full_name', COUNT(A.address) AS 'address_quantity'
	FROM sakila.customer AS C
    INNER JOIN sakila.address AS A
    ON C.address_id = A.address_id
    WHERE C.active = true
    GROUP BY C.customer_id
    ORDER BY C.first_name DESC;
    
SELECT CONCAT(S.first_name, ' ', S.last_name) AS 'full_name', AVG(P.amount) AS 'average_amount'
	FROM sakila.staff S
    INNER JOIN sakila.payment P
    ON S.staff_id = P.staff_id
    WHERE YEAR(P.payment_date) = 2006
    GROUP BY S.first_name, S.last_name;
    
SELECT A.actor_id, A.first_name, FA.film_id, F.title
	FROM sakila.actor AS A
    INNER JOIN sakila.film_actor AS FA
    ON A.actor_id = FA.actor_id
    INNER JOIN sakila.film AS F
    ON F.film_id = FA.film_id;
    