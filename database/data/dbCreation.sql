USE master;
GO

CREATE DATABASE NotProperty24_DB;
GO

USE NotProperty24_DB;
GO

CREATE TABLE [PropertyImage] (
  [PropertyImageID] [INT] IDENTITY (1,1) NOT NULL PRIMARY KEY,
  [ImageName] [varchar](50) NOT NULL,
  [Description] [varchar](150) NOT NULL,
  [ImageURL] [varchar](300) NOT NULL
);
GO

CREATE TABLE [ListingType] (
  [ListingTypeID] [INT] IDENTITY (1,1) NOT NULL PRIMARY KEY,
  [ListingTypeName] [varchar](10) NOT NULL,
  [Description] [varchar](80) NULL
);
GO

CREATE TABLE [PropertyType] (
  [PropertyTypeID] [INT] IDENTITY (1,1) NOT NULL PRIMARY KEY,
  [PropertyTypeName] [varchar](10) NOT NULL,
  [Description] [varchar](150) NULL
);
GO

CREATE TABLE [Address] (
  [AddressID] [INT] IDENTITY (1,1) NOT NULL PRIMARY KEY,
  [Street] [varchar](30) NOT NULL,
  [City] [varchar](30) NOT NULL,
  [Province] [varchar](30) NOT NULL,
  [PostalCode] [varchar](10) NOT NULL,
);
GO

CREATE TABLE [Agent] (
  [AgentID] [INT] IDENTITY (1,1) NOT NULL PRIMARY KEY,
  [FirstName] [varchar](30) NOT NULL,
  [LastName] [varchar](30) NOT NULL,
  [EmailAddress] [varchar](50) NOT NULL,
  [PhoneNumber] [varchar](15) NOT NULL,
  [ImageURL] [varchar](300) NOT NULL,
);
GO

CREATE TABLE [Property] (
  [PropertyID] [INT] IDENTITY (1,1) NOT NULL PRIMARY KEY,
  [AgentID] [INT] NOT NULL,
  [PropertyTypeID] [INT] NOT NULL,
  [ListingTypeID] [INT] NOT NULL,
  [AddressID] [INT] NOT NULL,

  [PropertyName] [varchar](30) NOT NULL,
  [Description] [varchar](150) NOT NULL,
  [Price] DECIMAL(10, 2) NOT NULL,
  [Size] DECIMAL(10, 2) NOT NULL,
  [NoOfBedrooms] [INT] NULL,
  [NoOfBathrooms] [INT] NULL,
  [NoOfParkingSpaces] [INT] NULL,
  [Furnished] [BIT] NULL,
  [ListingDate] [DATE] NOT NULL,
  [OccupationDate] [DATE] NULL,
      
  CONSTRAINT [FK_Property.AgentID]
    FOREIGN KEY ([AgentID])
      REFERENCES [Agent]([AgentID]),
      
  CONSTRAINT [FK_Property.PropertyTypeID]
    FOREIGN KEY ([PropertyTypeID])
      REFERENCES [PropertyType]([PropertyTypeID]),
      
  CONSTRAINT [FK_Property.ListingTypeID]
    FOREIGN KEY ([ListingTypeID])
      REFERENCES [ListingType]([ListingTypeID]),

  CONSTRAINT [FK_Property.AddressID]
    FOREIGN KEY ([AddressID])
      REFERENCES [Address]([AddressID]),
);
GO