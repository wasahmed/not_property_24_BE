USE master;
GO

USE NotProperty24_DB;
GO

-- Listing Type
INSERT INTO [ListingType] ([ListingTypeName], [Description])
VALUES
    ('Sale','It is a property that is available for purchase.'),
    ('Rent', 'It is a property listing which is availabe for use as a tenant.');
GO

-- Property Type
INSERT INTO [PropertyType] ([PropertyTypeName], [Description])
VALUES
    ('Apartment','A room that is usually leased.'),
    ('House', 'A building that usually serves as a shelter for one or more families.'),
    ('Town House','A single-family house that has more than one story and is usually connected to a similar house by a common wall.'),
    ('Vacant Lot','A piece of land that is not being used.'),
    ('Farm','A piece of land devoted to agricultural purposes.'),
    ('Commercial','A building with a main purpose of conducting business.'),
    ('industrial','A building with a main purpose of conducting industry.');
GO