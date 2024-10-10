import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Delivery Management System API',
      version: '1.0.0',
      description: 'API for managing deliveries, drivers, and routes.',
    },
    servers: [{ url: 'http://localhost:5000' }],
    components: {
      schemas: {
        Order: {
          type: 'object',
          properties: {
            orderId: {
              type: 'string',
              example: 'ORD12345',
            },
            customerName: {
              type: 'string',
              example: 'Jane Smith',
            },
            deliveryAddress: {
              type: 'string',
              example: '123 Main St, City, State, ZIP',
            },
            orderStatus: {
              type: 'string',
              enum: ['pending', 'dispatched', 'delivered', 'canceled'],
              default: 'pending',
              example: 'pending',
            },
            totalAmount: {
              type: 'number',
              format: 'float',
              example: 29.99,
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2023-10-01T12:00:00Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              example: '2023-10-01T12:00:00Z',
            },
          },
          required: ['customerName', 'deliveryAddress', 'totalAmount'],
        },
        Driver: {
          type: 'object',
          properties: {
            driverId: {
              type: 'string',
              example: 'DRV12345',
            },
            name: {
              type: 'string',
              example: 'John Doe',
            },
            email: {
              type: 'string',
              example: 'johndoe@example.com',
            },
            phone: {
              type: 'string',
              example: '+1234567890',
            },
            vehicleType: {
              type: 'string',
              example: 'Car',
            },
            status: {
              type: 'string',
              enum: ['active', 'inactive'],
              default: 'active',
              example: 'active',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2023-10-01T12:00:00Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              example: '2023-10-01T12:00:00Z',
            },
          },
          required: ['name', 'email', 'phone', 'vehicleType'],
        },
        Route: {
          type: 'object',
          properties: {
            routeId: {
              type: 'string',
              example: 'RT12345',
            },
            orderId: {
              type: 'string',
              example: 'ORD12345',
            },
            steps: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  location: {
                    type: 'string',
                    example: 'Location A',
                  },
                  timestamp: {
                    type: 'string',
                    format: 'date-time',
                    example: '2023-10-01T12:00:00Z',
                  },
                },
              },
            },
            status: {
              type: 'string',
              enum: ['pending', 'in-progress', 'completed'],
              default: 'pending',
              example: 'pending',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2023-10-01T12:00:00Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              example: '2023-10-01T12:00:00Z',
            },
          },
          required: ['orderId', 'steps'],
        },
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: 'USR12345',
            },
            username: {
              type: 'string',
              example: 'user123',
            },
            password: {
              type: 'string',
              example: 'Password123!',
            },
            role: {
              type: 'string',
              enum: ['Admin', 'Driver', 'User'],
              default: 'User',
              example: 'User',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2023-10-01T12:00:00Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              example: '2023-10-01T12:00:00Z',
            },
          },
          required: ['username', 'password'],
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
export default swaggerDocs;
