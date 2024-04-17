package echec.src;


import javax.swing.JFrame;
import javax.swing.WindowConstants;

public class FrameEchec extends JFrame 
{
	private PanelEchec panelEchec;
	
	public FrameEchec ()
	{
		this.setTitle   ( "Echec" );
		this.setLocation(  50, 50 );

		this.panelEchec = new PanelEchec();
		this.add ( this.panelEchec );
		this.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        this.setResizable(false);
		this.setVisible(true);
        this.setLocationRelativeTo(null);
        this.setVisible(true);
		this.pack();

        this.panelEchec.startGameThread();
	}

	public PanelEchec getPanelEchec() {return this.panelEchec;}


	/*---------------------------------------*/
	/* Main pour lancer l'application        */
	/*---------------------------------------*/
	public static void main(String args[])
	{
		new FrameEchec ();
	}
}
