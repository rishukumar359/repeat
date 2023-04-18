function Valid(){
 
          



         return(

<form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                  />
                  
                  <input
                    type="text"
                    name="age"
                    id="age"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.age}
                  />
              
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                    type="text"
                    name="Password"
                    id="Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Password}
                  />
                  {errors.Password && touched.Password && errors.Password}

                  <button
                    type="submit" 
                    name='submit'
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </form>
            
         )





}