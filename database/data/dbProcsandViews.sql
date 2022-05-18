CREATE VIEW PropertiesView AS
SELECT
    P.PropertyID,
	PT.PropertyTypeName,
	LT.ListingTypeName,
	Ad.Street,
	Ad.City,
	Ad.Province,
	A.FirstName,
	A.LastName,
	A.EmailAddress,
	P.PropertyName,
	P.Description,
	P.Price,
	P.Size,
	P.NoOfBedrooms,
	P.NoOfBathrooms,
	P.NoOfParkingSpaces,
	P.Furnished,
	P.ListingDate,
	P.OccupationDate
FROM
	Property AS P
INNER JOIN PropertyType AS PT ON
	P.PropertyTypeID = PT.PropertyTypeID
INNER JOIN ListingType AS LT ON
	P.ListingTypeID = LT.ListingTypeID
INNER JOIN Address AS Ad ON
	P.AddressID = Ad.AddressID
INNER JOIN Agent AS A ON
	P.AgentID = A.AgentID

DELIMITER //
CREATE PROCEDURE findPropertyImages(in propertyId INT)
BEGIN
	SELECT PT.PropertyImageID, PT.ImageName, PT.Description, PT.ImageURL  
 	FROM PropertyImage AS PT WHERE PT.PropertyID = propertyId;
END //
DELIMITER;


DELIMITER //
CREATE PROCEDURE getProperty(in propertyId INT)
BEGIN
	SELECT PT.PropertyImageID, PT.ImageName, PT.Description, PT.ImageURL  
 	FROM PropertyImage AS PT WHERE PT.PropertyID = propertyId;
END //
DELIMITER;