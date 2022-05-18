CREATE TABLE ListingType (
  ListingTypeID int NOT NULL AUTO_INCREMENT,
  ListingTypeName varchar(10) NOT NULL,
  Description varchar(80) NULL,
  PRIMARY KEY(ListingTypeID)
);

CREATE TABLE PropertyType (
  PropertyTypeID int NOT NULL AUTO_INCREMENT,
  PropertyTypeName varchar(10) NOT NULL,
  Description varchar(150) NULL,
  PRIMARY KEY(PropertyTypeID)
);

CREATE TABLE Address (
  AddressID int NOT NULL AUTO_INCREMENT,
  Street varchar(30) NOT NULL,
  City varchar(30) NOT NULL,
  Province varchar(30) NOT NULL,
  PostalCode varchar(10) NOT NULL,
  PRIMARY KEY(AddressID)
);

CREATE TABLE Agent (
  AgentID int NOT NULL AUTO_INCREMENT,
  FirstName varchar(30) NOT NULL,
  LastName varchar(30) NOT NULL,
  EmailAddress varchar(50) NOT NULL,
  PhoneNumber varchar(15) NOT NULL,
  ImageURL varchar(300) NOT NULL,
  PRIMARY KEY(AgentID)
);

CREATE TABLE Property (
  PropertyID int NOT NULL AUTO_INCREMENT,
  AgentID int NOT NULL,
  PropertyTypeID int NOT NULL,
  ListingTypeID int NOT NULL,
  AddressID int NOT NULL,

  PropertyName varchar(30) NOT NULL,
  Description varchar(150) NOT NULL,
  Price DECIMAL(10, 2) NOT NULL,
  Size DECIMAL(10, 2) NOT NULL,
  NoOfBedrooms int NULL,
  NoOfBathrooms int NULL,
  NoOfParkingSpaces int NULL,
  Furnished BIT NULL,
  ListingDate DATE NOT NULL,
  OccupationDate DATE NULL,

   PRIMARY KEY(PropertyID),
      
  CONSTRAINT FK_Property.AgentID
    FOREIGN KEY (AgentID)
      REFERENCES Agent(AgentID),
      
  CONSTRAINT FK_Property.PropertyTypeID
    FOREIGN KEY (PropertyTypeID)
      REFERENCES PropertyType(PropertyTypeID),
      
  CONSTRAINT FK_Property.ListingTypeID
    FOREIGN KEY (ListingTypeID)
      REFERENCES ListingType(ListingTypeID),

  CONSTRAINT FK_Property.AddressID
    FOREIGN KEY (AddressID)
      REFERENCES Address(AddressID),
);

CREATE TABLE PropertyImage (
  PropertyImageID int NOT NULL AUTO_INCREMENT,
  PropertyID int NOT NULL,
  ImageName varchar(50) NOT NULL,
  Description varchar(150) NOT NULL,
  ImageURL varchar(300) NOT NULL,

  PRIMARY KEY(PropertyImageID),
  CONSTRAINT FK_PropertyImage.PropertyID
    FOREIGN KEY(PropertyID)
      REFERENCES Property(PropertyID)

);