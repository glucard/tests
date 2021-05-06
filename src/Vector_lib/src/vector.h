#ifndef _VECTOR_H_
#define _VECTOR_H_

#include <stdio.h>
#include <malloc.h>

namespace vector {
	
	enum data_type {
		INT = 0,
		FLOAT
	};

	class Vector {
	public:
		// var
		data_type type;
		void* data;
		int lenght;

		// constructor
		Vector(data_type _type, int _lenght);

		// functions
		void destroy();
		void promptData();
	};
}

#endif // !_VECTOR_H_
