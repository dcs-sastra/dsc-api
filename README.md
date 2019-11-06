[![Build Status](https://travis-ci.org/dsc-sastra-university/dsc-api.svg?branch=master)](https://travis-ci.org/dsc-sastra-university/dsc-api)
# dsc-api v0.0.0



- [Auth](#auth)
	- [Authenticate](#authenticate)
	
- [Clusters](#clusters)
	- [Create clusters](#create-clusters)
	- [Delete clusters](#delete-clusters)
	- [Retrieve clusters](#retrieve-clusters)
	- [Update clusters](#update-clusters)
	
- [Events](#events)
	- [Create events](#create-events)
	- [Delete events](#delete-events)
	- [Retrieve events](#retrieve-events)
	- [Update events](#update-events)
	
- [MembersbyCluster](#membersbycluster)
	- [Create membersby cluster](#create-membersby-cluster)
	- [Delete membersby cluster](#delete-membersby-cluster)
	- [Retrieve membersby clusters](#retrieve-membersby-clusters)
	- [Update membersby cluster](#update-membersby-cluster)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	


# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

# Clusters

## Create clusters



	POST /clusters


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| name			| 			|  <p>Clusters's name.</p>							|
| img			| 			|  <p>Clusters's img.</p>							|
| backgroundColor			| 			|  <p>Clusters's backgroundColor.</p>							|
| link			| 			|  <p>Clusters's link.</p>							|

## Delete clusters



	DELETE /clusters/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Retrieve clusters



	GET /clusters/:id


## Update clusters



	PUT /clusters/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| name			| 			|  <p>Clusters's name.</p>							|
| img			| 			|  <p>Clusters's img.</p>							|
| backgroundColor			| 			|  <p>Clusters's backgroundColor.</p>							|
| link			| 			|  <p>Clusters's link.</p>							|

# Events

## Create events



	POST /events


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| name			| 			|  <p>Events's name.</p>							|
| date			| 			|  <p>Events's date.</p>							|
| description			| 			|  <p>Events's description.</p>							|
| main			| 			|  <p>Events's main.</p>							|
| venue			| 			|  <p>Events's venue.</p>							|
| speakers			| 			|  <p>Events's speakers.</p>							|
| poster			| 			|  <p>Events's poster.</p>							|
| register_link			| 			|  <p>Events's register_link.</p>							|

## Delete events



	DELETE /events/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Retrieve events



	GET /events/:id


## Update events



	PUT /events/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| name			| 			|  <p>Events's name.</p>							|
| date			| 			|  <p>Events's date.</p>							|
| description			| 			|  <p>Events's description.</p>							|
| main			| 			|  <p>Events's main.</p>							|
| venue			| 			|  <p>Events's venue.</p>							|
| speakers			| 			|  <p>Events's speakers.</p>							|
| poster			| 			|  <p>Events's poster.</p>							|
| register_link			| 			|  <p>Events's register_link.</p>							|

# MembersbyCluster

## Create membersby cluster



	POST /MembersbyCluster


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| lead			| 			|  <p>Membersby cluster's lead.</p>							|
| app			| 			|  <p>Membersby cluster's app.</p>							|
| flutter			| 			|  <p>Membersby cluster's flutter.</p>							|
| web			| 			|  <p>Membersby cluster's web.</p>							|
| ml			| 			|  <p>Membersby cluster's ml.</p>							|
| cloud			| 			|  <p>Membersby cluster's cloud.</p>							|
| graphic			| 			|  <p>Membersby cluster's graphic.</p>							|
| content			| 			|  <p>Membersby cluster's content.</p>							|
| marketing			| 			|  <p>Membersby cluster's marketing.</p>							|

## Delete membersby cluster



	DELETE /MembersbyCluster/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Retrieve membersby clusters



	GET /MembersbyCluster


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update membersby cluster



	PUT /MembersbyCluster/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| lead			| 			|  <p>Membersby cluster's lead.</p>							|
| app			| 			|  <p>Membersby cluster's app.</p>							|
| flutter			| 			|  <p>Membersby cluster's flutter.</p>							|
| web			| 			|  <p>Membersby cluster's web.</p>							|
| ml			| 			|  <p>Membersby cluster's ml.</p>							|
| cloud			| 			|  <p>Membersby cluster's cloud.</p>							|
| nonTech			| 			|  <p>Membersby cluster's nonTech.</p>							|

# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's role.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|


