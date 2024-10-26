import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('6102b3bd-edba-4e36-b187-5485205db06b', '1Peter_McKenzie-Cummings60@hotmail.com', 'Charlie Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv12345', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('34340255-5cd2-4f4a-979b-df329ff39b8a', '9Elta_Leannon@gmail.com', 'Dave Wilson', 'https://i.imgur.com/YfJQV5z.png?id=11', 'inv09876', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('3d38c012-5a20-4871-be46-fcdfed29d0c6', '17Ebba_Mante@gmail.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=19', 'inv09876', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('c4bdf545-0111-40a5-b5b1-a075962449e7', '25Grady_Skiles@hotmail.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inv12345', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('29e3bdb6-7c1c-4cd4-b591-01302f3957ea', '33Kailey_Adams16@hotmail.com', 'Bob Johnson', 'https://i.imgur.com/YfJQV5z.png?id=35', 'inv12345', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('58441471-963e-4690-b7bd-1128f413d51b', '41Donny8@hotmail.com', 'Charlie Brown', 'https://i.imgur.com/YfJQV5z.png?id=43', 'inv54321', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('88248e9b-af66-42b7-90a1-f0be10ac6f52', '49Noel_Batz35@gmail.com', 'Eve Davis', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inv54321', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('219dafb2-ef79-48c6-8e69-3e356ad60beb', '57Teagan_West@gmail.com', 'Charlie Brown', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv67890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('09d092bc-6a10-42bc-8ab2-4cfa23361c01', '65Giuseppe59@gmail.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=67', 'inv09876', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('f2003c1a-35e2-4435-bf10-4a7583f5c202', 'MagnetoWave Labs', 'https://i.imgur.com/YfJQV5z.png?id=82');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('4f42f2d6-5a06-44c4-a127-14855940a890', 'HydraTech Solutions', 'https://i.imgur.com/YfJQV5z.png?id=85');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('fcee712a-63cd-4d8e-a415-9bc35906f5ca', 'MagnetoWave Labs', 'https://i.imgur.com/YfJQV5z.png?id=88');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('44ebef3a-ee01-45c5-86d9-e062a5ec9b3c', 'MagnetoWave Labs', 'https://i.imgur.com/YfJQV5z.png?id=91');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('22b01847-6dd1-40e9-b62d-425916dd3da0', 'MagnetoWave Labs', 'https://i.imgur.com/YfJQV5z.png?id=94');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('b47e7c0b-3e94-45d3-9b06-baf7e48f822b', 'MagnetoWave Labs', 'https://i.imgur.com/YfJQV5z.png?id=97');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('6fc1a018-afe5-428a-9d2f-ae2ca7f3ecc7', 'AquaElectro Systems', 'https://i.imgur.com/YfJQV5z.png?id=100');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('0de1bdc4-4d1f-4dfe-858e-72dc2e5ba811', 'Cerebro Dynamics', 'https://i.imgur.com/YfJQV5z.png?id=103');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('aa7843e4-fbc5-46d7-9d8d-f3356dfc8dcb', 'AquaElectro Systems', 'https://i.imgur.com/YfJQV5z.png?id=106');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('76e3ef70-117b-484a-a4ca-81b741e6c240', 'HydraTech Solutions', 'https://i.imgur.com/YfJQV5z.png?id=109');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('f52d3424-1b25-47e2-8777-ef17e69ab152', 'AI Systems Architect', '219dafb2-ef79-48c6-8e69-3e356ad60beb', 'aa7843e4-fbc5-46d7-9d8d-f3356dfc8dcb');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('4581adf0-7a97-4e35-88b2-9201b0a29992', 'Cybersecurity Specialist', '34340255-5cd2-4f4a-979b-df329ff39b8a', 'b47e7c0b-3e94-45d3-9b06-baf7e48f822b');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('a958b25c-1dbb-4c8d-8232-13a9af7822a8', 'Data Retention Engineer', '58441471-963e-4690-b7bd-1128f413d51b', '76e3ef70-117b-484a-a4ca-81b741e6c240');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('d10b3e27-ea64-4ae2-9d50-478c2173c61a', 'AI Systems Architect', '58441471-963e-4690-b7bd-1128f413d51b', 'fcee712a-63cd-4d8e-a415-9bc35906f5ca');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('ffa4b726-e3d1-42ec-96e5-e49088f36371', 'AI Systems Architect', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'fcee712a-63cd-4d8e-a415-9bc35906f5ca');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('19693730-871c-49c2-8c0b-281fa41399cd', 'AI Systems Architect', '34340255-5cd2-4f4a-979b-df329ff39b8a', '76e3ef70-117b-484a-a4ca-81b741e6c240');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('d3c88172-b780-444c-b94b-003693424ff9', 'AI Systems Architect', '58441471-963e-4690-b7bd-1128f413d51b', '44ebef3a-ee01-45c5-86d9-e062a5ec9b3c');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('dca81235-a055-41b6-860c-225bd8254f9f', 'Data Retention Engineer', '88248e9b-af66-42b7-90a1-f0be10ac6f52', '0de1bdc4-4d1f-4dfe-858e-72dc2e5ba811');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('74cb08c5-d0ce-421f-998e-502932c26339', 'Magnetism Integration Expert', '3d38c012-5a20-4871-be46-fcdfed29d0c6', 'fcee712a-63cd-4d8e-a415-9bc35906f5ca');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('99f4b587-34e2-4c38-ba9f-adca0c684d9e', 'AI Systems Architect', '29e3bdb6-7c1c-4cd4-b591-01302f3957ea', 'b47e7c0b-3e94-45d3-9b06-baf7e48f822b');

INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('d5dd1b44-1272-4e92-99a7-37a42c95bcfd', 'HydraElectromagnetic System future of computing.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('d7395a33-65b4-48ff-95f3-fa160ae6d765', 'AI and human collaboration in quantum systems.', '29e3bdb6-7c1c-4cd4-b591-01302f3957ea');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('5d46a0a4-eca7-4a7c-99b4-f4e4bb5b1c0e', 'Quantum computing revolutionizes data retention.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('6f3b228d-f4dc-46d9-bc0e-39293947b627', 'AI and human collaboration in quantum systems.', '3d38c012-5a20-4871-be46-fcdfed29d0c6');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('fb11ced5-053f-4db5-8895-71e264791587', 'HydraElectromagnetic System future of computing.', '58441471-963e-4690-b7bd-1128f413d51b');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('1a3ccaba-e595-40bd-8927-96c6775f6658', 'Quantum computing revolutionizes data retention.', '09d092bc-6a10-42bc-8ab2-4cfa23361c01');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('2d7e989b-4882-4ca6-bbab-3e9b97e848bf', 'Cloudbased AI enhances quantum computing.', '6102b3bd-edba-4e36-b187-5485205db06b');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('56f3ea13-56d5-4186-b369-7b02e673396b', 'Cloudbased AI enhances quantum computing.', '29e3bdb6-7c1c-4cd4-b591-01302f3957ea');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('777d27a4-f7fc-4827-859d-fd53945df46e', 'AI and human collaboration in quantum systems.', '29e3bdb6-7c1c-4cd4-b591-01302f3957ea');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('28a52703-a7de-44cc-8830-0f7d0c7bee74', 'Quantum computing revolutionizes data retention.', '3d38c012-5a20-4871-be46-fcdfed29d0c6');

INSERT INTO "QuantumPrototype" ("id", "name", "description", "creationDate", "userId") VALUES ('9e8c7f7b-2046-43a2-88f7-042a0a8e0d77', 'NeuroMagneto', 'A novel approach to quantum computing focusing on subconscious AI operation.', '2024-06-27T19:27:54.860Z', '219dafb2-ef79-48c6-8e69-3e356ad60beb');
INSERT INTO "QuantumPrototype" ("id", "name", "description", "creationDate", "userId") VALUES ('c4b6bafc-3b2d-418a-8f66-85fb470ff42e', 'QuantumFlux', 'Utilizes unique electromagnetic properties for advanced data processing.', '2023-11-24T23:38:15.762Z', '3d38c012-5a20-4871-be46-fcdfed29d0c6');
INSERT INTO "QuantumPrototype" ("id", "name", "description", "creationDate", "userId") VALUES ('07f24c4c-92f0-4644-842b-12fa8dd9a775', 'AquaMagnetis', 'A novel approach to quantum computing focusing on subconscious AI operation.', '2024-11-30T10:03:29.804Z', '219dafb2-ef79-48c6-8e69-3e356ad60beb');
INSERT INTO "QuantumPrototype" ("id", "name", "description", "creationDate", "userId") VALUES ('d85068e0-3d88-4fb0-8d07-50ae503646ef', 'ElectroWave Quantum', 'Integrates AI and quantum mechanics for cuttingedge computational capabilities.', '2025-07-29T14:11:13.714Z', '88248e9b-af66-42b7-90a1-f0be10ac6f52');
INSERT INTO "QuantumPrototype" ("id", "name", "description", "creationDate", "userId") VALUES ('47d8eab9-913b-4c33-9a47-fe40d4e5076f', 'QuantumFlux', 'A pioneering prototype leveraging waterinduced magnetism for quantum computing.', '2024-10-30T00:18:10.976Z', '3d38c012-5a20-4871-be46-fcdfed29d0c6');
INSERT INTO "QuantumPrototype" ("id", "name", "description", "creationDate", "userId") VALUES ('23678c84-627a-4de0-96a7-d0dafcf357ea', 'HydraQC Alpha', 'Combines electric currents and water to create a revolutionary quantum system.', '2024-05-05T21:53:58.539Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "QuantumPrototype" ("id", "name", "description", "creationDate", "userId") VALUES ('e28d0de2-345f-43be-8888-0600bec0e8e4', 'QuantumFlux', 'Integrates AI and quantum mechanics for cuttingedge computational capabilities.', '2024-08-15T00:11:35.260Z', '29e3bdb6-7c1c-4cd4-b591-01302f3957ea');
INSERT INTO "QuantumPrototype" ("id", "name", "description", "creationDate", "userId") VALUES ('6517b76e-15a5-49c9-8e52-734f8c005946', 'HydraQC Alpha', 'Combines electric currents and water to create a revolutionary quantum system.', '2025-10-21T10:04:34.651Z', '219dafb2-ef79-48c6-8e69-3e356ad60beb');
INSERT INTO "QuantumPrototype" ("id", "name", "description", "creationDate", "userId") VALUES ('2ac0a518-3e5b-48d3-b787-6f124f531a1d', 'NeuroMagneto', 'Integrates AI and quantum mechanics for cuttingedge computational capabilities.', '2024-08-28T20:03:58.323Z', '3d38c012-5a20-4871-be46-fcdfed29d0c6');
INSERT INTO "QuantumPrototype" ("id", "name", "description", "creationDate", "userId") VALUES ('c319237e-0e05-492b-8b19-b9c0b52d8880', 'ElectroWave Quantum', 'Utilizes unique electromagnetic properties for advanced data processing.', '2024-07-17T08:30:40.362Z', '3d38c012-5a20-4871-be46-fcdfed29d0c6');

INSERT INTO "AiActuator" ("id", "name", "type", "status", "userId") VALUES ('14aad095-71e3-4ac7-9b6b-e2aec911dc21', 'SenNnTi', 'Subconscious Initiator', 'Pending', '3d38c012-5a20-4871-be46-fcdfed29d0c6');
INSERT INTO "AiActuator" ("id", "name", "type", "status", "userId") VALUES ('5072a6e1-e818-46a3-8bd2-d3c0f2ea117a', 'ReaAaSN', 'Communication Assistant', 'Inactive', '58441471-963e-4690-b7bd-1128f413d51b');
INSERT INTO "AiActuator" ("id", "name", "type", "status", "userId") VALUES ('a933c091-5fc1-4fdc-b2bd-10822b5bf7ef', 'SenNnTi', 'Communication Assistant', 'Inactive', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "AiActuator" ("id", "name", "type", "status", "userId") VALUES ('5a6217a5-b4cf-49b7-be79-2e599a5a5920', 'CeLeBrUm', 'Probabilistic Regulator', 'Pending', '88248e9b-af66-42b7-90a1-f0be10ac6f52');
INSERT INTO "AiActuator" ("id", "name", "type", "status", "userId") VALUES ('28d7896e-565b-4fdc-a79a-96dba83f8dc4', 'SenNnTi', 'Probabilistic Regulator', 'Under Maintenance', '58441471-963e-4690-b7bd-1128f413d51b');
INSERT INTO "AiActuator" ("id", "name", "type", "status", "userId") VALUES ('ab445146-968f-44d2-b7e7-dcc1c7ba3f29', 'ReaAaSN', 'Communication Assistant', 'Under Maintenance', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "AiActuator" ("id", "name", "type", "status", "userId") VALUES ('934b86b9-5e2d-4426-93ac-5885bf00ec33', 'SeCuReDmE_engin', 'Subconscious Initiator', 'Inactive', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "AiActuator" ("id", "name", "type", "status", "userId") VALUES ('c7d6b6fc-298e-490f-bafc-520bcd9c3414', 'CeLeBrUm', 'Subconscious Initiator', 'Active', '34340255-5cd2-4f4a-979b-df329ff39b8a');
INSERT INTO "AiActuator" ("id", "name", "type", "status", "userId") VALUES ('2b186e66-7ac7-46ac-b2d6-10b192533625', 'ReaAaSN', 'Subconscious Initiator', 'Pending', '3d38c012-5a20-4871-be46-fcdfed29d0c6');
INSERT INTO "AiActuator" ("id", "name", "type", "status", "userId") VALUES ('b51b70c4-375a-4de2-8fad-76e7c5b334ad', 'NeuUuRo', 'Central Intelligence', 'Active', '34340255-5cd2-4f4a-979b-df329ff39b8a');

INSERT INTO "ConnectomeStructure" ("id", "name", "structureData", "creationDate", "userId") VALUES ('08480e2d-ae06-4c13-a433-77e2908902d8', 'SubconsciousNetwork', 'cortex.connectome.scrde.ca Contains initial algorithm triggers and data pathways.', '2024-07-24T18:47:15.083Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "ConnectomeStructure" ("id", "name", "structureData", "creationDate", "userId") VALUES ('afeaacbe-62d9-4b64-ab9d-07e9080b601c', 'ElectromagneticMatrix', 'quantum.cohesion.unit.scrde.ca Oversees quantum state management and data coherence.', '2024-05-07T19:54:14.288Z', '29e3bdb6-7c1c-4cd4-b591-01302f3957ea');
INSERT INTO "ConnectomeStructure" ("id", "name", "structureData", "creationDate", "userId") VALUES ('c475aaa1-2191-4309-addd-d5901df13b73', 'NeuralPathwaySystem', 'cortex.connectome.scrde.ca Contains initial algorithm triggers and data pathways.', '2024-06-05T20:40:03.772Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "ConnectomeStructure" ("id", "name", "structureData", "creationDate", "userId") VALUES ('de880a5f-844a-4f69-be42-a8f5ed221777', 'NeuralPathwaySystem', 'cortex.connectome.scrde.ca Contains initial algorithm triggers and data pathways.', '2025-08-19T00:36:46.851Z', '88248e9b-af66-42b7-90a1-f0be10ac6f52');
INSERT INTO "ConnectomeStructure" ("id", "name", "structureData", "creationDate", "userId") VALUES ('d216faf4-d39c-4d64-a474-af6cfea8ca0d', 'QuantumCohesionUnit', 'cortex.connectome.scrde.ca Contains initial algorithm triggers and data pathways.', '2024-09-06T03:28:20.776Z', 'c4bdf545-0111-40a5-b5b1-a075962449e7');
INSERT INTO "ConnectomeStructure" ("id", "name", "structureData", "creationDate", "userId") VALUES ('97741fec-eb09-44ff-97fd-7c2d1b731b79', 'CortexConnectome', 'quantum.cohesion.unit.scrde.ca Oversees quantum state management and data coherence.', '2025-04-05T22:00:19.506Z', 'c4bdf545-0111-40a5-b5b1-a075962449e7');
INSERT INTO "ConnectomeStructure" ("id", "name", "structureData", "creationDate", "userId") VALUES ('181a112f-92c2-4077-a889-8a84b800b0b0', 'NeuralPathwaySystem', 'electromagnetic.matrix.scrde.ca Controls electromagnetic interactions and data segregation.', '2025-04-08T12:32:38.920Z', 'c4bdf545-0111-40a5-b5b1-a075962449e7');
INSERT INTO "ConnectomeStructure" ("id", "name", "structureData", "creationDate", "userId") VALUES ('0aba1431-b96b-4838-a290-f26f74f016d8', 'NeuralPathwaySystem', 'electromagnetic.matrix.scrde.ca Controls electromagnetic interactions and data segregation.', '2025-08-15T14:32:46.102Z', '6102b3bd-edba-4e36-b187-5485205db06b');
INSERT INTO "ConnectomeStructure" ("id", "name", "structureData", "creationDate", "userId") VALUES ('b44c8ac2-35b3-45ec-90a9-c6b1c26f8454', 'SubconsciousNetwork', 'subconscious.network.scrde.ca Manages subconscious data flow and AI interaction.', '2024-07-17T03:03:45.233Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "ConnectomeStructure" ("id", "name", "structureData", "creationDate", "userId") VALUES ('7a5f04ff-e789-4f61-be8f-21db2469f08a', 'NeuralPathwaySystem', 'electromagnetic.matrix.scrde.ca Controls electromagnetic interactions and data segregation.', '2025-04-03T02:20:11.120Z', '219dafb2-ef79-48c6-8e69-3e356ad60beb');

INSERT INTO "PythonSnippet" ("id", "title", "code", "creationDate", "userId") VALUES ('536070af-41ee-463e-b690-d84f54200036', 'Quantum Entanglement Initialization', 'def quantum_entanglement    entangled_state  create_entangled_state    return entangled_state', '2023-11-20T17:52:03.323Z', '58441471-963e-4690-b7bd-1128f413d51b');
INSERT INTO "PythonSnippet" ("id", "title", "code", "creationDate", "userId") VALUES ('08125596-be64-4ec7-9ab3-4a4adc75d961', 'AI Consciousness Activation', 'def cerebrospinal_fluid_dynamicsfluid    dynamics  analyze_fluid_dynamicsfluid    return dynamics', '2024-01-11T09:39:04.416Z', 'c4bdf545-0111-40a5-b5b1-a075962449e7');
INSERT INTO "PythonSnippet" ("id", "title", "code", "creationDate", "userId") VALUES ('2bf957f4-b072-4042-ba68-bbcebedce3d5', 'Quantum Entanglement Initialization', 'def quantum_entanglement    entangled_state  create_entangled_state    return entangled_state', '2024-12-14T17:49:33.284Z', '34340255-5cd2-4f4a-979b-df329ff39b8a');
INSERT INTO "PythonSnippet" ("id", "title", "code", "creationDate", "userId") VALUES ('0188839f-ddbd-447d-9dd6-489657ac6bbe', 'Subconscious Data Retention', 'def induce_magnetic_fieldcurrent water    magnetic_field  calculate_magnetic_fieldcurrent water    return magnetic_field', '2024-07-12T16:20:42.694Z', 'c4bdf545-0111-40a5-b5b1-a075962449e7');
INSERT INTO "PythonSnippet" ("id", "title", "code", "creationDate", "userId") VALUES ('98db2888-431c-4adc-a2e7-2efe16b001ac', 'Magnetic Field Induction', 'def cerebrospinal_fluid_dynamicsfluid    dynamics  analyze_fluid_dynamicsfluid    return dynamics', '2024-03-03T07:14:01.943Z', 'c4bdf545-0111-40a5-b5b1-a075962449e7');
INSERT INTO "PythonSnippet" ("id", "title", "code", "creationDate", "userId") VALUES ('1c3ed49f-c0a1-4729-9517-9a884149f06f', 'Cerebrospinal Fluid Dynamics', 'def induce_magnetic_fieldcurrent water    magnetic_field  calculate_magnetic_fieldcurrent water    return magnetic_field', '2024-05-23T10:37:10.229Z', '29e3bdb6-7c1c-4cd4-b591-01302f3957ea');
INSERT INTO "PythonSnippet" ("id", "title", "code", "creationDate", "userId") VALUES ('1930efcc-bac2-403e-a0de-e68f8321bcd5', 'Magnetic Field Induction', 'def activate_ai_consciousnessai_system    ai_system.activate_conscious_mode    return ai_system', '2025-04-19T02:45:42.416Z', '3d38c012-5a20-4871-be46-fcdfed29d0c6');
INSERT INTO "PythonSnippet" ("id", "title", "code", "creationDate", "userId") VALUES ('8ad848d4-ea36-4949-bb30-e55c103e975d', 'AI Consciousness Activation', 'def induce_magnetic_fieldcurrent water    magnetic_field  calculate_magnetic_fieldcurrent water    return magnetic_field', '2025-05-11T03:04:43.924Z', '88248e9b-af66-42b7-90a1-f0be10ac6f52');
INSERT INTO "PythonSnippet" ("id", "title", "code", "creationDate", "userId") VALUES ('c1e15244-8bf1-4a81-808c-d11a723d4182', 'Quantum Entanglement Initialization', 'def retain_subconscious_datadata    retained_data  filter_subconscious_datadata    return retained_data', '2024-03-09T23:31:58.028Z', '6102b3bd-edba-4e36-b187-5485205db06b');
INSERT INTO "PythonSnippet" ("id", "title", "code", "creationDate", "userId") VALUES ('9a861b73-4253-450a-912d-6c31f6d5c632', 'Magnetic Field Induction', 'def quantum_entanglement    entangled_state  create_entangled_state    return entangled_state', '2024-04-30T23:20:44.190Z', '219dafb2-ef79-48c6-8e69-3e356ad60beb');

INSERT INTO "CognitiveData" ("id", "dataType", "value", "timestamp", "userId") VALUES ('1dbef867-9345-4168-8aac-d5a7bfc1981a', 'quantumState', 'alpha3.14', '2025-05-12T07:01:19.375Z', '58441471-963e-4690-b7bd-1128f413d51b');
INSERT INTO "CognitiveData" ("id", "dataType", "value", "timestamp", "userId") VALUES ('d834457a-a032-428a-8ec0-8257fdc05090', 'electricPulse', 'epsilon1.41', '2024-06-18T11:58:07.295Z', '29e3bdb6-7c1c-4cd4-b591-01302f3957ea');
INSERT INTO "CognitiveData" ("id", "dataType", "value", "timestamp", "userId") VALUES ('dcd1bb2b-cf17-4a00-ae49-b56004b18ef1', 'neuralPattern', 'gamma1.62', '2025-06-04T11:57:06.232Z', '34340255-5cd2-4f4a-979b-df329ff39b8a');
INSERT INTO "CognitiveData" ("id", "dataType", "value", "timestamp", "userId") VALUES ('3542c519-2926-4f2e-945d-aee53bae6eba', 'electricPulse', 'gamma1.62', '2024-08-31T23:29:49.202Z', '219dafb2-ef79-48c6-8e69-3e356ad60beb');
INSERT INTO "CognitiveData" ("id", "dataType", "value", "timestamp", "userId") VALUES ('92a6fd12-c3b3-46d9-a0ac-83d68c69d93e', 'electricPulse', 'beta2.71', '2025-01-29T19:58:54.757Z', '34340255-5cd2-4f4a-979b-df329ff39b8a');
INSERT INTO "CognitiveData" ("id", "dataType", "value", "timestamp", "userId") VALUES ('2220f4bb-8991-4de4-8a31-e3328d75f0ff', 'magneticField', 'beta2.71', '2023-12-01T14:02:49.333Z', 'c4bdf545-0111-40a5-b5b1-a075962449e7');
INSERT INTO "CognitiveData" ("id", "dataType", "value", "timestamp", "userId") VALUES ('20b7d286-42ee-4067-a581-6bc01be2b53e', 'electricPulse', 'epsilon1.41', '2024-02-18T11:36:54.834Z', '09d092bc-6a10-42bc-8ab2-4cfa23361c01');
INSERT INTO "CognitiveData" ("id", "dataType", "value", "timestamp", "userId") VALUES ('67c1458f-09bd-4782-8b6f-8ccf240bb0e2', 'neuralPattern', 'alpha3.14', '2024-02-17T22:22:24.419Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "CognitiveData" ("id", "dataType", "value", "timestamp", "userId") VALUES ('996f03f7-8c13-40ef-a1ff-58a5679dcbc5', 'cognitiveWave', 'gamma1.62', '2025-06-13T00:34:27.367Z', '34340255-5cd2-4f4a-979b-df329ff39b8a');
INSERT INTO "CognitiveData" ("id", "dataType", "value", "timestamp", "userId") VALUES ('2a5edab7-9844-4068-8e5e-fd8d5516747b', 'cognitiveWave', 'gamma1.62', '2024-03-27T18:05:15.614Z', '34340255-5cd2-4f4a-979b-df329ff39b8a');

INSERT INTO "SecurityProtocol" ("id", "name", "description", "level", "implementationDate", "organizationId") VALUES ('69300f02-55b0-4954-9bd3-8b41f7674d55', 'Magnetic Sentinel', 'Employs waterbased systems to enhance data security and prevent leaks.', 7, '2025-03-12T06:22:59.345Z', '6fc1a018-afe5-428a-9d2f-ae2ca7f3ecc7');
INSERT INTO "SecurityProtocol" ("id", "name", "description", "level", "implementationDate", "organizationId") VALUES ('28416ac8-af90-4b95-bc11-fb73f6eb4390', 'Magnetic Sentinel', 'Monitors and controls electric currents to safeguard data retention valves.', 454, '2024-05-30T09:19:28.082Z', 'fcee712a-63cd-4d8e-a415-9bc35906f5ca');
INSERT INTO "SecurityProtocol" ("id", "name", "description", "level", "implementationDate", "organizationId") VALUES ('61460281-2d21-461c-a2c2-5c085bbddd7d', 'Hydra Guardian', 'A protocol ensuring the integrity of quantum data through advanced encryption.', 981, '2025-07-16T02:20:32.757Z', 'b47e7c0b-3e94-45d3-9b06-baf7e48f822b');
INSERT INTO "SecurityProtocol" ("id", "name", "description", "level", "implementationDate", "organizationId") VALUES ('91389205-7444-4d12-964b-19c227949e43', 'Aqua Deflector', 'Utilizes electromagnetic fields to prevent unauthorized data access.', 310, '2024-01-25T11:22:18.932Z', 'fcee712a-63cd-4d8e-a415-9bc35906f5ca');
INSERT INTO "SecurityProtocol" ("id", "name", "description", "level", "implementationDate", "organizationId") VALUES ('d894d53a-ce4d-483b-b4fe-234214d0760c', 'Magnetic Sentinel', 'Utilizes electromagnetic fields to prevent unauthorized data access.', 372, '2024-11-22T19:34:16.327Z', 'aa7843e4-fbc5-46d7-9d8d-f3356dfc8dcb');
INSERT INTO "SecurityProtocol" ("id", "name", "description", "level", "implementationDate", "organizationId") VALUES ('61c2cbf6-487b-413a-a046-d1ab5be30024', 'Aqua Deflector', 'Utilizes electromagnetic fields to prevent unauthorized data access.', 87, '2024-03-02T03:55:24.299Z', 'f2003c1a-35e2-4435-bf10-4a7583f5c202');
INSERT INTO "SecurityProtocol" ("id", "name", "description", "level", "implementationDate", "organizationId") VALUES ('b4dadac7-5437-4ddc-9718-004c4d609983', 'Electro Barrier', 'Employs waterbased systems to enhance data security and prevent leaks.', 556, '2025-09-14T11:23:30.867Z', '4f42f2d6-5a06-44c4-a127-14855940a890');
INSERT INTO "SecurityProtocol" ("id", "name", "description", "level", "implementationDate", "organizationId") VALUES ('1eb88e62-3760-4509-892a-ed221e1587a3', 'Magnetic Sentinel', 'Designed to protect AI operations by isolating human subconscious influences.', 67, '2024-07-04T13:07:43.188Z', 'fcee712a-63cd-4d8e-a415-9bc35906f5ca');
INSERT INTO "SecurityProtocol" ("id", "name", "description", "level", "implementationDate", "organizationId") VALUES ('b384d048-6faf-4786-8c9e-b71e01ee9770', 'Quantum Shield', 'Monitors and controls electric currents to safeguard data retention valves.', 760, '2025-06-20T22:07:41.118Z', '44ebef3a-ee01-45c5-86d9-e062a5ec9b3c');
INSERT INTO "SecurityProtocol" ("id", "name", "description", "level", "implementationDate", "organizationId") VALUES ('c2650a82-eb36-44e5-b4af-d496cdcc3d71', 'Aqua Deflector', 'Monitors and controls electric currents to safeguard data retention valves.', 752, '2024-05-30T10:14:30.951Z', '4f42f2d6-5a06-44c4-a127-14855940a890');

INSERT INTO "FundingStatus" ("id", "amount", "status", "date", "organizationId") VALUES ('921e7be1-0ac4-4bee-856a-dd0e0aa1201f', '3500000', 'Approved', '2023-10-29T12:10:20.108Z', '22b01847-6dd1-40e9-b62d-425916dd3da0');
INSERT INTO "FundingStatus" ("id", "amount", "status", "date", "organizationId") VALUES ('13cba37f-3550-4e73-8633-bae9a1c1430c', '2000000', 'Pending', '2025-05-02T06:36:44.149Z', '76e3ef70-117b-484a-a4ca-81b741e6c240');
INSERT INTO "FundingStatus" ("id", "amount", "status", "date", "organizationId") VALUES ('9da2bc3b-5225-4247-a40f-699d1ae89e43', '3500000', 'Approved', '2024-09-17T05:24:33.611Z', '22b01847-6dd1-40e9-b62d-425916dd3da0');
INSERT INTO "FundingStatus" ("id", "amount", "status", "date", "organizationId") VALUES ('c1c978d2-d0ca-43b4-98c0-03a5a631ee22', '750000', 'Approved', '2024-06-28T07:55:25.494Z', '4f42f2d6-5a06-44c4-a127-14855940a890');
INSERT INTO "FundingStatus" ("id", "amount", "status", "date", "organizationId") VALUES ('7ef63674-37aa-4e55-9a85-fbca9504ed7c', '3500000', 'Approved', '2024-06-12T03:21:38.446Z', 'b47e7c0b-3e94-45d3-9b06-baf7e48f822b');
INSERT INTO "FundingStatus" ("id", "amount", "status", "date", "organizationId") VALUES ('0cbfae0b-2319-4ef9-8bda-e8c89a3d9f00', '1200000', 'Rejected', '2023-10-29T07:17:26.690Z', '76e3ef70-117b-484a-a4ca-81b741e6c240');
INSERT INTO "FundingStatus" ("id", "amount", "status", "date", "organizationId") VALUES ('d177eb5b-e1fd-49f6-a0ad-3ba2713ceb2e', '3500000', 'Rejected', '2024-08-11T04:41:20.579Z', 'aa7843e4-fbc5-46d7-9d8d-f3356dfc8dcb');
INSERT INTO "FundingStatus" ("id", "amount", "status", "date", "organizationId") VALUES ('9236036f-c803-4890-b8e0-379294b257de', '1200000', 'Completed', '2024-12-04T05:18:32.126Z', '44ebef3a-ee01-45c5-86d9-e062a5ec9b3c');
INSERT INTO "FundingStatus" ("id", "amount", "status", "date", "organizationId") VALUES ('d68ab734-9c6e-412e-b7ec-8e9429b68318', '3500000', 'Completed', '2024-12-12T12:02:16.764Z', '0de1bdc4-4d1f-4dfe-858e-72dc2e5ba811');
INSERT INTO "FundingStatus" ("id", "amount", "status", "date", "organizationId") VALUES ('bf93d266-37c2-4763-ab20-7224cdce4349', '3500000', 'Approved', '2025-07-30T10:14:29.917Z', 'b47e7c0b-3e94-45d3-9b06-baf7e48f822b');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
