
function abc ( N , M)
{


    var trace = 0, row_repeat = 0;

    var column_repeat = 0;
 


    for (i = 0; i < N; i++) {
 

        for (j = 0; j < N; j++) {
 


            if (i == j) {
 


                trace += M[i][j];

            }

        }
 

        var flag1 = 0;
 

        for (j = 0; j < N; j++) {

            for (k = 0; k < N; k++) {
 


                if (j != k

                    && M[i][j] == M[i][k]) {

                    row_repeat++;

                    flag1 = 1;

                    break;

                }

            }
 

            if (flag1 == 1) {
 

                break;

            }

        }
 

        var flag2 = 0;
 


        for (j = 0; j < N; j++) {

            for (k = 0; k < N; k++) {
 

                

                if (j != k

                    && M[j][i] == M[k][i]) {
 

                    column_repeat++;

                    flag2 = 1;

                    break;

                }

            }
 

            if (flag2 == 1) {
 

                break;

            }

        }

    }
 

    

    var output = trace + " "

                    + row_repeat + " "

                    + column_repeat + "\n";
 

    

    return output;
}
 


    var M = [ [ 1, 2, 3, 4 ],

                  [ 2, 1, 4, 3 ],

                  [ 3, 4, 1, 2 ],

                  [ 4, 3, 2, 1 ] ];

    var N = M.length;
 

    var output = vestigium(N, M);
 

    
    document.write(output);
 
 


