#include "vector.h"

namespace vector {
	// VectorF constructor.
	Vector::Vector(data_type _type, int _lenght) {
		type = _type;
		lenght = _lenght;
		switch (type) {
		case INT:
			data = malloc(lenght * sizeof(int));
			for (int i = 0; i < lenght; i++) {
				((int*)data)[i] = 0;
			}
			break;
		case FLOAT:
			data = malloc(lenght * sizeof(float));
			for (int i = 0; i < lenght; i++) {
				((float*)data)[i] = 0.f;
			}
			break;
		default:
			break;
		}
	}
	// VectorF functions.
	void Vector::destroy() {
		free(data);
	}
	void Vector::promptData() {
		switch (type) {
		case INT:
			for (int i = 0; i < lenght; i++) {
				printf("%d ", ((int*)data)[i]);
			}
			break;
		case FLOAT:
			for (int i = 0; i < lenght; i++) {
				printf("%f ", ((float*)data)[i]);
			}
			break;
		}
		printf("\n");
	}
}