SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1 AS 'one', 2 AS 'two', 3 AS 'three';
SELECT 10 + 15;
SELECT 8 + (4 - 2) * 3;
SELECT * FROM Scientists.Scientists;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;
SELECT Name FROM Scientists.Scientists ORDER BY Name;
SELECT Name FROM Scientists.Projects ORDER BY Name DESC;
SELECT CONCAT('O projeto ', Name, 'precisou de ', Hours, ' horas para ser concluído.') as resultado FROM Scientists.Projects;
SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Project FROM Scientists.AssignedTo;
SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC;
SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours LIMIT 1 OFFSET 1;
SELECT * FROM Scientists.Projects ORDER BY Hours LIMIT 5;
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') AS resultado FROM Scientists.Scientists;