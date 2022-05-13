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

-- Agent
INSERT INTO [Agent] ([FirstName], [LastName], [EmailAddress], [PhoneNumber], [ImageURL])
VALUES 
    ('Nickey', 'Serot', 'nserot0@npr.org', '344 566 5910', 'http://dummyimage.com/100x100.png/5fa2dd/ffffff'),
    ('Eldin', 'McGuffog', 'emcguffog1@yale.edu', '487 965 0190', 'http://dummyimage.com/100x100.png/5fa2dd/ffffff'),
    ('Wilone', 'Sazio', 'wsazio2@paypal.com', '394 739 0306', 'http://dummyimage.com/100x100.png/cc0000/ffffff'),
    ('Reine', 'Blann', 'rblann3@is.gd', '759 737 2055', 'http://dummyimage.com/100x100.png/5fa2dd/ffffff'),
    ('Jessica', 'Spellman', 'jspellman4@sogou.com', '916 624 3082', 'http://dummyimage.com/100x100.png/cc0000/ffffff'),
    ('Christina', 'Longman', 'clongman5@simplemachines.org', '941 800 0555', 'http://dummyimage.com/100x100.png/cc0000/ffffff'),
    ('Dulcea', 'Brinkler', 'dbrinkler6@squarespace.com', '351 421 9199', 'http://dummyimage.com/100x100.png/ff4444/ffffff'),
    ('Mikel', 'Dizlie', 'mdizlie7@google.cn', '742 967 6279', 'http://dummyimage.com/100x100.png/dddddd/000000'),
    ('Anthea', 'Currum', 'acurrum8@hhs.gov', '986 277 6380', 'http://dummyimage.com/100x100.png/ff4444/ffffff'),
    ('Mead', 'Rodrigues', 'mrodrigues9@godaddy.com', '740 174 0686', 'http://dummyimage.com/100x100.png/dddddd/000000');
GO

INSERT INTO [Address] (Street, City, Province, PostalCode)
	VALUES ('897 Gemsbok St','Pietersburg','Limpopo','0760'),
('496 Wit Rd','Johannesburg','Gauteng','2018'),
('1666 Robertson Ave','Temba','North West','0499'),
('2224 Oranje St','Wesselsbron','Free State','9682'),
('168 Gray Pl','Durban','KwaZulu-Natal','4061'),
('2338 Gemsbok St','Pietersburg','Limpopo','0742'),
('226 First Ave','Madikwe','North West','2845'),
('2153 Zigzag Rd','Vereeniging','Gauteng','1936'),
('883 Dorp St','Nuweland','Western Cape','7708'),
('2459 Robertson Ave','Temba','North West','0502'),
('426 Kort St','Kagisanong','Free State','9309'),
('820 Gemsbok St','Mashashane','Limpopo','0743'),
('1157 Bad St','Eerste River','Western Cape','7105'),
('449 Cheriton Dr','Mehlomnyama','KwaZulu-Natal','4246'),
('166 Prospect St','Pretoria','Gauteng','0011'),
('2252 Kort St','Kakamas','Northern Cape','8870'),
('977 Plane St','Butterworth','Eastern Cape','4968'),
('1444 Kamp St','Kaapstad','Western Cape','7493'),
('1045 President St','Johannesburg','Gauteng','2065'),
('1566 Doreen St','Thabazimbi','Limpopo','0383'),
('877 Oost St','Nelspruit','Mpumalanga','1202'),
('1735 Nelson Mandela Drive','Bochum','Limpopo','0790'),
('970 St. John Street','Somerset West','Western Cape','7135'),
('1979 Bezuidenhout St','Embalenhle','Mpumalanga','2285'),
('2298 Church St','Pretoria','Gauteng','0135'),
('256 South St','Mabopane','Gauteng','0219')
GO