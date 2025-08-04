
# Specification for Tenants Page

This document outlines the plan to build and enhance the Tenants page, located at `http://localhost:5173/tenants`. The goal is to create a comprehensive module for managing all tenant-related information and activities, replacing the current dummy data with a fully functional, database-driven interface.

## 1. Purpose and Goals

The primary purpose of the Tenants module is to provide a centralized system for managing tenant profiles, leases, rent payments, and communication. This will streamline administrative tasks and improve record-keeping.

## 2. Core Features

Based on the requirements, the module will be built around the following core features:

### 2.1. Tenant Profiles

A detailed view of each tenant, containing:
-   **Personal Information:** Name, ID/Passport, Phone Number, Email.
-   **Tenancy Details:** The specific unit and property the tenant is linked to.
-   **Lease Information:** A summary of the current lease agreement.
-   **Payment History:** A log of all past rent payments.

### 2.2. Lease Management

Tools for handling the entire lease lifecycle:
-   **Lease Actions:** Functionality to create, renew, and terminate lease agreements.
-   **Document Storage:** Ability to upload and store scanned lease agreements.
-   **Automation:** Automatic calculation of rent due dates based on the lease start date.

### 2.3. Rent Status Tracking

A system for monitoring and managing rent payments:
-   **Payment Status:** Clear visual indicators for rent that is `Paid`, `Due`, or `Overdue`.
-   **Automated Reminders:** System-generated reminders for upcoming or overdue rent.
-   **Transaction Logs:** A detailed log of all financial transactions related to rent.

### 2.4. Communication Hub

Direct communication channels with tenants:
-   **Contact Options:** Ability to send messages via SMS or Email directly from the platform.
-   **Message Templates:** Pre-defined templates for common communications (e.g., payment reminders, lease renewal notices).
-   **Communication History:** A log of all messages sent to each tenant.

## 3. Data Model (Key Fields)

The following fields will be central to the Tenant data model:

-   `tenantName`
-   `tenantID`
-   `unitAssigned` (Reference to the Unit model)
-   `leaseStartDate`
-   `leaseEndDate`
-   `rentAmount`
-   `paymentStatus` (Enum: `paid`, `due`, `late`)
-   `contactInfo` (Object with `phone` and `email`)

## 4. User Interactions

The interface will support the following interactions:

-   **Filtering:** Users will be able to filter the tenant list by lease status (`Active`, `Expired`, `Terminated`).
-   **Searching:** A search bar will allow users to quickly find tenants by name, unit, or phone number.

## 5. System Integrations

The Tenants module will connect with other parts of the application:

-   **Financials Module:** To process and log rent payments.
-   **Communication Module:** To send and track messages.
-   **Properties/Units Module:** To link tenants to their assigned units.

## 6. Implementation Plan

I will implement this feature in the following phases:

1.  **Backend First:** Create the necessary API endpoints for full CRUD (Create, Read, Update, Delete) functionality for tenants and leases.
2.  **Remove Dummy Data:** Refactor the existing `Tenants.jsx` page to remove all hardcoded data.
3.  **API Integration:** Connect the `Tenants.jsx` page to the new backend API to fetch and display real data.
4.  **Develop Core UI:** Build the main view, including the tenant list, search bar, and filtering options.
5.  **Build Forms and Modals:** Create the forms for adding/editing tenants and managing leases, using modals for a clean user experience.
6.  **Implement Communication Features:** Integrate the communication functionality for sending SMS/Email.
7.  **Styling and UX Polish:** Apply consistent styling to match the rest of the application and ensure a smooth user experience.

This structured approach will ensure the Tenants module is built to be robust, scalable, and fully integrated with the existing system.
